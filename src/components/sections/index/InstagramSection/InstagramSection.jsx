import React from "react";

// eslint-disable-next-line import/extensions
import { InstagramAPI } from "api/InstagramAPI.js";
import { Instagram } from "components/common/Instagram/Instagram";
import { Section } from "components/layout/Section/Section";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { instagramUser } from "constants.js";
import s from "./InstagramSection.module.scss";

export const InstagramSection = () => {
  const [photos, setPhotos] = React.useState([]);
  // eslint-disable-next-line no-return-await
  const getInstagramData = async () => await InstagramAPI();
  React.useEffect(() => {
    getInstagramData().then((res) => setPhotos(res));
  }, []);

  return (
    <Section>
      <Wrapper>
        <div className={s.container}>
          {photos.map(
            // eslint-disable-next-line camelcase
            ({ permalink, media_url, caption, timestamp, thumbnail_url }, i) =>
              i < 4 && (
                <Instagram
                  key={timestamp}
                  url={permalink}
                  image={media_url}
                  videoCover={thumbnail_url}
                  text={caption}
                  user={instagramUser}
                  date={timestamp.slice(0, 10)}
                />
              )
          )}
        </div>
      </Wrapper>
    </Section>
  );
};
