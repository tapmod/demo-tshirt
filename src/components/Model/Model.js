import React from 'react';
import { Wrapper, Loader } from './Model.style';
import { useSketchfab } from './Model.hooks';
import { modelUid, modelOptions } from 'consts/sketchfab';

const Model = () => {
  const iframeId = 'sweater';

  const [isLoading, sketchfabApi] = useSketchfab({
    uid: modelUid,
    iframeId,
    options: modelOptions
  });

  if (sketchfabApi) {
    sketchfabApi.addEventListener(
      'click',
      function(event) {
        // eslint-disable-next-line no-console
        console.log(event.material);
      },
      { pick: 'slow' }
    );
  }

  return (
    <Wrapper isLoading={isLoading}>
      {isLoading && <Loader>loading...</Loader>}
      <iframe title="Sketchfab Model" id={iframeId} />
    </Wrapper>
  );
};

export default Model;
