import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export async function GET(request) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}>
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
