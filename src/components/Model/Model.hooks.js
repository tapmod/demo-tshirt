import { useEffect, useState, useRef } from 'react';
import SketchfabWrapper from 'sketchfab-api-wrapper';

export const useSketchfab = ({ uid, iframeId, options }) => {
  const [isLoading, setIsLoading] = useState(true);

  const sketchFabApiRef = useRef();

  useEffect(() => {
    const init = async () => {
      const loadWrapperPromise = new SketchfabWrapper({
        iframeQuery: `#${iframeId}`,
        uid,
        options,
        useSingleton: false
      });

      const wrapper = await loadWrapperPromise.init();

      const api = { ...wrapper, ...wrapper.api };

      sketchFabApiRef.current = api;
      window.api = api;

      setIsLoading(false);
    };
    init();
  }, [iframeId, options, uid]);

  return [isLoading, sketchFabApiRef.current];
};
