import React, { useState } from 'react';
import { Wrapper, Loader, Configurator, ButtonsWrapper, ColorButton } from './Model.style';
import { useSketchfab } from './Model.hooks';
import { modelUid, modelOptions } from 'consts/sketchfab';
import mocks from './Model.mocks';

const { colors } = mocks;
const Model = () => {
  const iframeId = 't-shirt';
  const [color, setColor] = useState(colors[0].value);

  const [isLoading, api] = useSketchfab({
    uid: modelUid,
    iframeId,
    options: modelOptions
  });

  if (api) {
    api.addEventListener(
      'click',
      function(event) {
        // eslint-disable-next-line no-console
        console.log(event.material);
      },
      { pick: 'slow' }
    );
  }

  const handleColorChange = color => () => {
    if (api) {
      const material = api.materials.filter(m => m.name === 'tshirt')[0];
      material.channels.AlbedoPBR.color = api.hexToLiner(color);
      api.setMaterial(material);
    }
    setColor(color);
  };

  return (
    <Wrapper isLoading={isLoading}>
      {isLoading && (
        <Loader>
          <div class="loader triangle">
            <svg viewBox="0 0 86 80">
              <polygon points="43 8 79 72 7 72" />
            </svg>
          </div>
        </Loader>
      )}
      <iframe title="Sketchfab Model" id={iframeId} />
      <Configurator>
        <ButtonsWrapper>
          {colors.map(({ value }) => (
            <ColorButton
              onClick={handleColorChange(value)}
              style={{ backgroundColor: value }}
              className={color === value ? 'active' : ''}
            />
          ))}
        </ButtonsWrapper>
      </Configurator>
    </Wrapper>
  );
};

export default Model;
