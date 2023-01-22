export default defineEventHandler(async (event) => {
  // Handle Query Params
  const { name } = getQuery(event)

  // Handle Post Data
  const { age } = await readBody(event)

  return {
    message: `Hello, ${name}! You are ${age} Years old`,
  }

  // API call with private key
  // const { data } = await $fetch(
  //   'https://api.currencyapi.com/v3/latest?apikey=eJdPhICJUDBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2'
  // )

  // return data
})
