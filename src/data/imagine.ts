export interface ImaginePhoto {
  title: string
  source: string
  link: string
  credit?: string
  creditLink?: string
}

export interface ImagineTopic {
  highlightText: string
  extraText: string
  photos: ImaginePhoto[]
}

export const topics: ImagineTopic[] = [
  {
    highlightText: 'Health facilities',
    extraText: 'are well funded.',
    photos: [
      {
        title: 'Build Angeles Healthcare Projects',
        source: 'healthCareProjectsPhoto',
        link: 'https://bit.ly/3gSCdzZ',
      },
      {
        title: 'Proposed Ángeles Dialysis Center',
        source: 'dialysisCenterPhoto',
        link: 'https://bit.ly/3HW1iWD',
      },
    ],
  },
  {
    highlightText: 'Urban planning',
    extraText: 'is not neglected.',
    photos: [
      {
        title: 'Build Angeles Civil Works & Civic Centers',
        source: 'civilCivicProjectsPhoto',
        link: 'https://bit.ly/3gSCdzZ',
      },
      {
        title: 'Angeles City Culinary Strip',
        credit: 'Ar. Paul Maiquez',
        creditLink: 'https://bit.ly/ba-maiquez-fb',
        source: 'foodStripPhoto',
        link: 'https://bit.ly/3LFyd41',
      },
      {
        title: 'Build Angeles Housing Projects',
        source: 'housingProjectsPhoto',
        link: 'https://bit.ly/3gSCdzZ',
      },
    ],
  },
]
export const allPhotos: ImaginePhoto[] = topics.flatMap(topic => topic.photos)
export const topicIndexByPhotoIndex: number[] = topics.flatMap(({ photos }, topicIndex) =>
  Array.from<number>({ length: photos.length }).fill(topicIndex)
)
export const getTopicAndPhoto = (photoIndex: number) => ({
  topic: topics[topicIndexByPhotoIndex[photoIndex]],
  photo: allPhotos[photoIndex],
})
