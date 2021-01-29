import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:
                    'AIzaSyAsrS7jTYulfWxd_kbnwSV6e32iaoK0pwU' }}
                    defaultCenter={center}
                    defaultZoom={zoom}
            >
            
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default map
