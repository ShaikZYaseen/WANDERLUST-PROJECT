
mapboxgl.accessToken = mapToken;                     
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12",       
  center: listing.geometry.coordinates,              
  zoom: 10,                                           
});
// console.log(listing.geometry.coordinates)
// const marker = new mapboxgl.Marker({color:"red"})
//     .setLngLat(coordinates)
//     .addTo(map);

