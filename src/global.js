const cities = ['New York', 'Paris', 'bogotá', 'Buenos Aires'];

const randomString = () => {
  const string = cities[Math.floor(Math.random()*cities.length)];
  return string;
}

export default randomString;