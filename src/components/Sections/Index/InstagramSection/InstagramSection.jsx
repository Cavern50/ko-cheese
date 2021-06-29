import React from "react";
import s from "./InstagramSection.module.scss";
import g from "src/styles/Main.module.scss";

import { _instagram } from "src/api/_instagram";
import { Instagram } from "@components/Common/Instagram/Instagram";

export const InstagramSection = () => {
   const [photos, setPhotos] = React.useState([]);
   const getInstagramData = async () => {
      return await _instagram();
   };
   React.useEffect(() => {
      getInstagramData().then((res) => setPhotos(res));
   }, []);
   const instagramUser = 'ko-cheese';
   return (
      <section>
         <div className={g.wrapper}>
            <div className={s.container}>
               {photos.map(
                  (
                     {
                        permalink,
                        media_url,
                        caption,
                        timestamp,
                        thumbnail_url,
                     },
                     i
                  ) =>
                     i < 4 ? (
                        <Instagram
                           url={permalink}
                           image={media_url}
                           videoCover={thumbnail_url}
                           text={caption}
                           user={instagramUser}
                           date={timestamp.slice(0, 10)}
                        />
                     ) : (
                        false
                     )
               )}
            </div>
         </div>
      </section>
   );
};
