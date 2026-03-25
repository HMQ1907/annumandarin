export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validate required fields
  if (!body.parentName || !body.phone || !body.childName || !body.childAge) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Vui lòng điền đầy đủ thông tin bắt buộc'
    })
  }

  // Validate phone number
  if (!/^(0[3-9])\d{8}$/.test(body.phone.trim())) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Số điện thoại không hợp lệ'
    })
  }

  // Validate email if provided
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email không hợp lệ'
    })
  }

  const config = useRuntimeConfig()
  const googleSheetUrl = config.public.googleSheetUrl

  // If Google Sheet URL is configured, send data there
  if (googleSheetUrl) {
    try {
      await $fetch(googleSheetUrl, {
        method: 'POST',
        body: {
          parentName: body.parentName,
          phone: body.phone,
          email: body.email || '',
          childName: body.childName,
          childAge: body.childAge,
          course: body.course || '',
          message: body.message || '',
          timestamp: body.timestamp || new Date().toISOString()
        }
      })
    } catch (error) {
      console.error('Google Sheets error:', error)
      // Don't throw - we still want to capture the data
    }
  } else {
    // Log data to console when Google Sheet URL is not configured
    console.log('📝 New registration (Google Sheet URL not configured):')
    console.log(JSON.stringify(body, null, 2))
  }

  return {
    success: true,
    message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.'
  }
})
