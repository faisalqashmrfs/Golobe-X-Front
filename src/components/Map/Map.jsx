import './MapStyle.css'
import { IoLocation } from "react-icons/io5";

function Map() {
    return (
   

    <div className="container">
      <div className="mapTitle"><span className='mapF'>Location/Map</span><button className='mapbtn'>View on google maps</button></div>

      <div className='mapView' style={{ height: '100vh', width: '100%' }}>
      <iframe className='Fq-mapColaction-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5072142060094!2d28.990034023573816!3d41.03603591771463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab764cd5981a1%3A0xb1067fbfeb23d92d!2zR8O8bcO8xZ9zdXl1LCDEsG7Dtm7DvCBDZC4gTm86OCwgMzQ0MzcgQmV5b8SfbHUvxLBzdGFuYnVsLCDYqtix2YPZitin!5e0!3m2!1sar!2s!4v1702552122500!5m2!1sar!2s"></iframe>
      <div className="mapdesc"><IoLocation className='location' />Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</div>
      </div></div>
  )
}

export default Map