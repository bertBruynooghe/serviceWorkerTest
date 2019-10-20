self.addEventListener('install', function(event){
	console.log(event)
})

self.addEventListener('activate', function(event){
    console.log(event)
})

self.addEventListener('fetch', function(event){
  // return something for each interception
  console.log('request', event.request)
  event.respondWith(fetch(event.request))  
})