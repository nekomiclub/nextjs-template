import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

import { cfg } from '~/config';



/** Site metadata */
export const metaObject = (payload: {
  title?: string,
  description?: string,
  keywords?: string[],
  openGraph?: OpenGraph,
  robots?: ('all' | 'noindex' | 'nofollow')[],
}): Metadata => {
  const defaultKeywords = [];

  const title = payload.title !== undefined ? `${payload.title} ― ${cfg.siteName}` : cfg.siteName;
  const description = payload.description ?? `${cfg.siteName} description...`;
  const keywords = payload.keywords?.length ? [...payload.keywords, ...defaultKeywords] : defaultKeywords;
  const siteName = cfg.siteName;
  const robots: string = payload.robots?.length ? payload.robots?.join(',') : 'all';

  return {
    title,
    description,
    keywords,
    applicationName: siteName,
    robots,
    openGraph: payload.openGraph ?? {
      title,
      description,
      siteName,
    }
  };
};