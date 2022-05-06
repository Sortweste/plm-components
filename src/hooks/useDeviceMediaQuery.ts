import { useMediaQuery } from 'react-responsive';

const useDeviceMediaQuery = () => {
  const isMobile = useMediaQuery({ minWidth: 360 });
  const isSmallDevice = useMediaQuery({ minWidth: 576 });
  const isMediumDevice = useMediaQuery({ minWidth: 768 });
  const isLargeDevice = useMediaQuery({ minWidth: 992 });
  const isXLargeDevice = useMediaQuery({ minWidth: 1200 });
  const isXXLargeDevice = useMediaQuery({ minWidth: 1400 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });

  return {
    isMobile,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isXLargeDevice,
    isXXLargeDevice,
    isPortrait,
  };
};

export default useDeviceMediaQuery;
