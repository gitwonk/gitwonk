import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const satoshi = fetch(
  new URL("../../../public/fonts/Satoshi-Black.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(request) {
  const [satoshiFont] = await Promise.all([satoshi]);

  return new ImageResponse(
    (
      <div tw="flex items-end justify-between p-16 h-full w-full">
        <h1 tw="text-8xl font-extrabold max-w-lg">
          Write, Collaborate, Publish.
        </h1>

        <img
          width="180"
          height="180"
          tw="justify-end"
          src="https://gitwonk.com/images/avatars/gitwonk.png"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Satoshi",
          data: satoshiFont,
        },
      ],
    },
  );
}
