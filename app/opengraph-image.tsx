import { ImageResponse } from 'next/og';
async function getOGImages() {
  // Dummy implementation, replace with your actual logic
  return [
    { id: 1, text: "Image 1" },
    { id: 2, text: "Image 2" },
    { id: 3, text: "Image 3" }
  ];
}

// Dummy function to mimic fetching caption for an image
async function getCaptionForImage() {
  // Dummy implementation, replace with your actual logic
  return `Caption for Image`;
}

export async function generateImageMetadata({
  params,
}: {
  params: { id: string }
}) {
  const images = await getOGImages();
 
  return images.map((image, idx) => ({
    id: idx,
    size: { width: 1200, height: 600 },
    alt: image.text,
    contentType: 'image/png',
  }))
}
 
export default async function Image({
  params,
  id,
}: {
  params: { id: string }
  id: number
}) {
  // const productId = params.id
  // const imageId = id
  // const text = await getCaptionForImage(productId, imageId)
 
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 88,
          background: '#000',
          color: '#fafafa',
        }}
      >
        Hello world!
      </div>
    )
  )
}