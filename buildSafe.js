const password = process.argv[2]

if (!password) {
  console.log('Password is required')
} else if (password === 'opensesame') {
  console.log('Secret number: 714')
} else {
  console.log('Failed to open safe')
}