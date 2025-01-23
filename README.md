<img alt="Next.js Video Starter - the fastest way to add video Next.js." src="https://next-video.dev/opengraph-image.png">

<h1 align="center" style="margin-top: 16px;">Next.js Video Starter</h1>

<p align="center">
 The fastest way to add video to your Next.js app.
</p>

<p align="center">
  <a href="https://next-video.dev/docs"><strong>Docs</strong></a> ·
  <a href="https://next-video-demo.vercel.app"><strong>Demo</strong></a> ·
  <a href="https://github.com/muxinc/next-video"><strong>GitHub</strong></a>
</p>
<br/>

## Table of Contents

- [Deploy](#deploy): Need a Mux account? Start here.
- [Getting Started](#getting-started): Already created a Mux account using the Vercel integration? Start here.
- [Manual Setup](#manual-setup): Interested in running locally and deploying manually? Start here.

## Deploy

Vercel deployment will guide you through creating a Mux account and project with $20 of usage/month for $0.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muxinc/next-video-starter&products=[{"type":"integration","productSlug":"mux","integrationSlug":"mux","protocol":"video"}])

## Getting Started

This section assumes you've setup a Mux account and project using the Vercel Integration (press deploy button above). If you only want to develop locally, follow the [Manual Setup](#manual-setup) steps below.

### Step 1. Pull environment variables

You'll need your Mux access token and secret token before you can begin adding videos. Run the following command to pull them from Vercel:

```bash
vercel env pull
```

### Step 2. Add your video

Add your video directly to the [`/videos`](./videos/) directory. For example, `/videos/my-video.mp4`.

### Step 3. Import your video

Import your video into the [home page](./app/page.tsx) and replace the getting started video.

```diff
- import getStarted from "/videos/get-started.mp4";
+ import myVideo from "/videos/my-video.mp4";
```

### Step 4. Add the video to the player

Finally, set the video `src` to point to your newly imported video.

```diff
- <Video className={styles.video} src={getStarted} />
+ <Video className={styles.video} src={myVideo} />
```

### Step 5. Celebrate!

Run `npm run dev`! Congratulations, you're now streaming a video just like some of your favorite sites such as YouTube or Netflix! [Interested in how video streaming works?](https://howvideo.works)

**What now?** See the [next-video docs](https://next-video.dev/docs) to learn how to set custom poster images, create background videos, use a custom player, and more!

## Manual Setup

### Step 1. Create your Mux account

**Option 1:** The easiest way to get started with Mux is through the native integration in the [Vercel Marketplace](https://vercel.com/marketplace/mux). Vercel Marketplace users will get $20 of usage/month for $0. [Learn more](https://vercel.com/marketplace/mux).

**Option 2:** You can also get started by creating an account directly in [Mux](https://www.mux.com/?utm_source=create-next-app&utm_medium=with-mux-video&utm_campaign=create-next-app).

### Step 2. Clone this example

```bash
git clone git@github.com:muxinc/next-video-starter.git
```

```bash
cd next-video-starter
```

```bash
npm install
```

### Step 3. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then, go to the [settings page](https://dashboard.mux.com/settings/access-tokens) in your Mux dashboard, get a new **API Access Token**. Use that token to set the variables in `.env.local`:

- `MUX_TOKEN_ID` should be the `TOKEN ID` of your new token
- `MUX_TOKEN_SECRET` should be `TOKEN SECRET`

### Step 4. Add your own video

Go to the [add your video](#step-2-add-your-video) step in the getting started section above to start playing your own videos.

### Step 5. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

To deploy on Vercel, you need to set the `MUX_TOKEN_ID` and `MUX_TOKEN_SECRET` environment variables using either the [Vercel Dashboard](https://vercel.com/docs/projects/environment-variables/managing-environment-variables?utm_source=github&utm_medium=readme&utm_campaign=next-example) or the [Vercel CLI](https://vercel.com/docs/cli/env?utm_source=github&utm_medium=readme&utm_campaign=next-example)

Then push the project to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) to deploy.
