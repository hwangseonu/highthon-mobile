import axios from 'axios';

//서울시 마포구 와우산로29가길 69
export const totalTime = async (addr) => {
  const lat = "37.480787";
  const lon = "126.895866";

  const appkey = '8fbbcf98-a697-4d6d-8f53-94ecc6f204cc';
  let res = await axios.get(`https://api2.sktelecom.com/tmap/geo/fullAddrGeo?version=1&format=json&callback=result&coordType=WGS84GEO&&fullAddr=${addr}&page=1&count=20&appKey=${appkey}`);
  const {newLat, newLon} = res.data.coordinateInfo.coordinate[0];
  res = await axios.get(`https://api2.sktelecom.com/tmap/routes/distance?version=1&format=json&startX=${lon}&startY=${lat}&endX=${newLon}&endY=${newLat}&reqCoordType=WGS84GEO&appKey=${appkey}`);
  return res.data.distanceInfo.distance;
};
