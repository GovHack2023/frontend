import "../css/midBox.css";
import Map from "../pre-utils/Map";
import { sendRequest } from "../pre-utils/requests";
import { useEffect, useState } from "react";

function MidBox() {
  const [twitterCount, setTwitterCount] = useState(0);
  const [mastodonCount, setMastodonCount] = useState(0);
  useEffect(() => {
    sendRequest("/twitter/count").then((res) => {
      setTwitterCount(res.data.data.count);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      sendRequest("/mastodon/count")
        .then((res) => {
          if (res.data.stauts === 200) {
            setMastodonCount(res.data.data.count);
            console.log(res.data.suatus);
          } else {
            throw new Error("Mastodon is down");
          }
        })
        .catch((error) => {
          if (error.message === "Mastodon is down") {
            setMastodonCount(0);
          }
        });
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="midBox">
      <div className="number">
        <div className="numberHeader">
          <ul>
            <li style={{ color: "blue" }}>{twitterCount}</li>
            <li style={{ color: "blue" }}>{mastodonCount}</li>
          </ul>
        </div>
        <div className="numberBody">
          <ul>
            <li style={{ color: "purple", fontSize: "18px" }}>Twitters</li>
            <li style={{ color: "purple", fontSize: "18px" }}>Mastodons</li>
          </ul>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default MidBox;
