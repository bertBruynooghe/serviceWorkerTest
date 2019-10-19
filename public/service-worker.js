self.addEventListener('install', function(event){
	console.log(event)
})

self.addEventListener('activate', function(event){
    console.log(event)
})

self.addEventListener('fetch', function(event){
  console.log(event.request.url)
  // return something for each interception
})