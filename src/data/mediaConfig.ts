// Media Configuration File for Reef Runner
// All video paths, poster images, photography and chapter timestamps are managed here.

export interface VideoChapter {
  id: string;
  time: number; // in seconds
  formattedTime: string;
  title: string;
  description: string;
}

export interface MediaConfig {
  video: {
    src: string;
    poster: string;
    title: string;
    durationEstimateSeconds: number;
    chapters: VideoChapter[];
  };
  photos: {
    heroBoat: string;
    scanAtDock: string;
    lifejacketFitting: string;
  };
}

const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const MEDIA_CONFIG: MediaConfig = {
  video: {
    src: `${BASE}media/Reef_Runner_Full_Explainer.mp4`,
    poster: `${BASE}media/reef-runner-lifejacket-attendant.jpg`,
    title: 'Reef Runner — Full Concept Explainer',
    durationEstimateSeconds: 110, // ~1m 50s
    chapters: [
      {
        id: 'meet',
        time: 0,
        formattedTime: '0:00',
        title: 'Meet Reef Runner',
        description: 'Introduction to the compact solar-assisted trimaran design.'
      },
      {
        id: 'scan',
        time: 9,
        formattedTime: '0:09',
        title: 'Scan the boat',
        description: 'Locating the QR code at the dock bollard.'
      },
      {
        id: 'book',
        time: 19,
        formattedTime: '0:19',
        title: 'Book and pay',
        description: 'Mobile web reservation and duration selection.'
      },
      {
        id: 'prepare',
        time: 31,
        formattedTime: '0:31',
        title: 'Prepare safely',
        description: 'Staff briefing, life jacket fitting, and emergency paddle check.'
      },
      {
        id: 'bluetooth',
        time: 43,
        formattedTime: '0:43',
        title: 'Bluetooth authorisation',
        description: 'Dockside controller unlock followed by physical mooring release.'
      },
      {
        id: 'ride',
        time: 57,
        formattedTime: '0:57',
        title: 'Enjoy the ride',
        description: 'Single rider underway in sheltered operating waters.'
      },
      {
        id: 'solar',
        time: 69, // 1:09
        formattedTime: '1:09',
        title: 'Solar charging',
        description: 'Horizontal PV wings capturing daylight to replenish the pack.'
      },
      {
        id: 'return',
        time: 79, // 1:19
        formattedTime: '1:19',
        title: 'Return and check out',
        description: 'Attendant assists with securing the boat back at the dock.'
      },
      {
        id: 'swap',
        time: 89, // 1:29
        formattedTime: '1:29',
        title: 'Battery swaps',
        description: 'Quick shore exchange of modular concealed battery packs.'
      },
      {
        id: 'overview',
        time: 103, // 1:43
        formattedTime: '1:43',
        title: 'Closing overview',
        description: 'Summary of proposed benefits for Fijian sheltered waters.'
      }
    ]
  },
  photos: {
    heroBoat: `${BASE}media/reef-runner-lifejacket-attendant.jpg`,
    scanAtDock: `${BASE}media/reef-runner-scan-dock.jpg`,
    lifejacketFitting: `${BASE}media/reef-runner-lifejacket-attendant.jpg`
  }
};
