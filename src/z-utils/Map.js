import "../css/map.css";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./australian-states2";
import { melbourneData } from "./melbourneoutline";
import { sydneyData } from "./sydney";
import { brisbaneData } from "./brisbaneoutline";
import { perthData } from "./perthoutline";
import { PassedFlag } from "../z-components/MainBox";

import { useContext } from "react";

function Map() {
  const { flag, setFlag } = useContext(PassedFlag);

  return (
    <PassedFlag.Provider value={{ flag, setFlag }}>
      <div className="map">
        <MapContainer
          center={[-37.79763071907876, 144.95974102992008]}
          zoom={10}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=1Eukt3KRFTDZjj8IbGhx"
            attribute='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          {statesData.features.map((state, index) => {
            if (state.geometry.type === "Polygon") {
              const coordinates = state.geometry.coordinates[0].map(
                (coordinate) => [coordinate[1], coordinate[0]]
              );
              return (
                <Polygon
                  key={`state-${index}`}
                  pathOptions={{
                    fillColor: "#FD8D3C",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: "3",
                    color: "blue",
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    mouseover: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 5,
                        dashArray: "3",
                        color: "#666",
                        fillColor: "#FACDCC",
                      });
                    },
                    mouseout: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        dashArray: "3",
                        color: "white",
                        fillColor: "#FD8D3C",
                      });
                    },
                  }}
                />
              );
            } else if (state.geometry.type === "MultiPolygon") {
              return state.geometry.coordinates.map((polygon, subIndex) => {
                const coordinates = polygon[0].map((coordinate) => [
                  coordinate[1],
                  coordinate[0],
                ]);
                return (
                  <Polygon
                    key={`state-${index}-${subIndex}`}
                    pathOptions={{
                      fillColor: "#FD8D3C",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      dashArray: "3",
                      color: "blue",
                    }}
                    positions={coordinates}
                    eventHandlers={{
                      mouseover: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.7,
                          weight: 5,
                          dashArray: "3",
                          color: "#666",
                          fillColor: "#FACDCC",
                        });
                      },
                      mouseout: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.7,
                          weight: 2,
                          dashArray: "3",
                          color: "white",
                          fillColor: "#FD8D3C",
                        });
                      },
                    }}
                  />
                );
              });
            }
            return null;
          })}

          {melbourneData.features.map((country) => {
            if (country.geometry.type === "Polygon") {
              const coordinates = country.geometry.coordinates[0].map(
                (coordinate) => [coordinate[1], coordinate[0]]
              );
              return (
                <Polygon
                  key={`polygon-${country.properties.id}`}
                  pathOptions={{
                    fillColor: "pink",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: "3",
                    color: "black",
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    mouseover: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 5,
                        dashArray: "3",
                        color: "pink",
                        fillColor: "pink",
                      });
                    },
                    mouseout: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        dashArray: "3",
                        color: "pink",
                        fillColor: "pink",
                      });
                    },
                    click: (e) => {
                      const chagedFlag = {
                        Melbourne: true,
                        Sydney: false,
                        Perth: false,
                        Brisbane: false,
                      };
                      setFlag(chagedFlag);
                    },
                  }}
                />
              );
            } else if (country.geometry.type === "MultiPolygon") {
              return country.geometry.coordinates.map((polygon, index) => {
                const coordinates = polygon[0].map((coordinate) => [
                  coordinate[1],
                  coordinate[0],
                ]);
                return (
                  <Polygon
                    key={`polygon-${country.properties.id}-${index}`}
                    pathOptions={{
                      fillColor: "pink",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      dashArray: "3",
                      color: "black",
                    }}
                    positions={coordinates}
                    eventHandlers={{
                      mouseover: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.7,
                          weight: 5,
                          dashArray: "3",
                          color: "pink",
                          fillColor: "pink",
                        });
                      },
                      mouseout: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.7,
                          weight: 2,
                          dashArray: "3",
                          color: "pink",
                          fillColor: "pink",
                        });
                      },
                      click: (e) => {
                        const chagedFlag = {
                          Melbourne: true,
                          Sydney: false,
                          Perth: false,
                          Brisbane: false,
                        };
                        setFlag(chagedFlag);
                      },
                    }}
                  />
                );
              });
            }
            return null;
          })}

          {sydneyData.features.map((state) => {
            if (state.geometry.type === "Polygon") {
              const coordinates = state.geometry.coordinates[0].map(
                (coordinate) => [coordinate[1], coordinate[0]]
              );
              return (
                <Polygon
                  key={`polygon-${state.properties.id}`}
                  pathOptions={{
                    fillColor: "#FD8D3C",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: "3",
                    color: "blue",
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    mouseover: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 5,
                        dashArray: "3",
                        color: "#666",
                        fillColor: "#FACDCC",
                      });
                    },
                    mouseout: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        dashArray: "3",
                        color: "white",
                        fillColor: "#FD8D3C",
                      });
                    },
                    click: (e) => {
                      const chagedFlag = {
                        Melbourne: false,
                        Sydney: true,
                        Perth: false,
                        Brisbane: false,
                      };
                      setFlag(chagedFlag);
                    },
                  }}
                />
              );
            } else if (state.geometry.type === "MultiPolygon") {
              return state.geometry.coordinates.map((polygon, index) => {
                const coordinates = polygon[0].map((coordinate) => [
                  coordinate[1],
                  coordinate[0],
                ]);
                return (
                  <Polygon
                    key={`polygon-${state.properties.id}-${index}`}
                    pathOptions={{
                      fillColor: "#FD8D3C",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      dashArray: "3",
                      color: "blue",
                    }}
                    positions={coordinates}
                    eventHandlers={{
                      mouseover: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.7,
                          weight: 5,
                          dashArray: "3",
                          color: "#666",
                          fillColor: "#FACDCC",
                        });
                      },
                      mouseout: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.7,
                          weight: 2,
                          dashArray: "3",
                          color: "white",
                          fillColor: "#FD8D3C",
                        });
                      },
                      click: (e) => {
                        const chagedFlag = {
                          Melbourne: false,
                          Sydney: true,
                          Perth: false,
                          Brisbane: false,
                        };
                        setFlag(chagedFlag);
                      },
                    }}
                  />
                );
              });
            }
            return null;
          })}

          {perthData.features.map((country) => {
            if (country.geometry.type === "Polygon") {
              const coordinates = country.geometry.coordinates[0].map(
                (coordinate) => [coordinate[1], coordinate[0]]
              );
              return (
                <Polygon
                  key={`polygon-${country.properties.id}`}
                  pathOptions={{
                    fillColor: "pink",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: "3",
                    color: "black",
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    mouseover: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 5,
                        dashArray: "3",
                        color: "pink",
                        fillColor: "pink",
                      });
                    },
                    mouseout: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        dashArray: "3",
                        color: "pink",
                        fillColor: "pink",
                      });
                    },
                    click: (e) => {
                      const chagedFlag = {
                        Melbourne: false,
                        Sydney: false,
                        Perth: true,
                        Brisbane: false,
                      };
                      setFlag(chagedFlag);
                    },
                  }}
                />
              );
            }
            return null;
          })}

          {brisbaneData.features.map((state) => {
            if (state.geometry.type === "Polygon") {
              const coordinates = state.geometry.coordinates[0].map(
                (coordinate) => [coordinate[1], coordinate[0]]
              );
              return (
                <Polygon
                  key={`polygon-${state.properties.id}`}
                  pathOptions={{
                    fillColor: "#FD8D3C",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: "3",
                    color: "blue",
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    mouseover: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 5,
                        dashArray: "3",
                        color: "#666",
                        fillColor: "#FACDCC",
                      });
                    },
                    mouseout: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        dashArray: "3",
                        color: "white",
                        fillColor: "#FD8D3C",
                      });
                    },
                    click: (e) => {
                      const chagedFlag = {
                        Melbourne: false,
                        Sydney: false,
                        Perth: false,
                        Brisbane: true,
                      };
                      setFlag(chagedFlag);
                    },
                  }}
                />
              );
            } else if (state.geometry.type === "MultiPolygon") {
              return state.geometry.coordinates.map((polygon, index) => {
                const coordinates = polygon[0].map((coordinate) => [
                  coordinate[1],
                  coordinate[0],
                ]);
                return (
                  <Polygon
                    key={`polygon-${state.properties.id}-${index}`}
                    pathOptions={{
                      fillColor: "#FD8D3C",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      dashArray: "3",
                      color: "blue",
                    }}
                    positions={coordinates}
                    eventHandlers={{
                      mouseover: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.7,
                          weight: 5,
                          dashArray: "3",
                          color: "#666",
                          fillColor: "#FACDCC",
                        });
                      },
                      mouseout: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                          fillOpacity: 0.7,
                          weight: 2,
                          dashArray: "3",
                          color: "white",
                          fillColor: "#FD8D3C",
                        });
                      },
                      click: (e) => {
                        const chagedFlag = {
                          Melbourne: false,
                          Sydney: false,
                          Perth: false,
                          Brisbane: true,
                        };
                        setFlag(chagedFlag);
                      },
                    }}
                  />
                );
              });
            }
            return null;
          })}
        </MapContainer>
      </div>
    </PassedFlag.Provider>
  );
}

export default Map;
