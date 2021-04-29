import React, { ReactElement } from "react";
import HtmlToReact from 'html-to-react';
import YouTube from 'react-youtube-embed';
import { TwitterTweetEmbed } from 'react-twitter-embed';
var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

var processingInstructions = [
    {
        shouldProcessNode: (node) => {
            return node.name && node.name === 'oembed';
        },
        processNode: (node) => {
            if (node.attribs && node.attribs.url.indexOf('youtube') !== -1) {
                return <YouTube id={node.attribs.url} />;
            }
            if (node.attribs && node.attribs.url.indexOf('twitter') !== -1) {
                const [, tweetId] = node.attribs.url.match(/^https:\/\/twitter\.com\/.*\/status\/(.*)$/);
                return <TwitterTweetEmbed tweetId={tweetId} />;
            }
            console.error('Missing embedded support for ' + node.attribs.url)
        },
    },
    {
        shouldProcessNode: () => {
            return true;
        },
        processNode: processNodeDefinitions.processDefaultNode,
    },
];

export default function EditorContent({ text }: { text: string; }): ReactElement {
    const html = (new HtmlToReact.Parser()).parseWithInstructions(text, () => true, processingInstructions);

    return <div className={'content'}>
        <>{html}</>
        <style jsx>{`
            .content {
                font-size: 18px;
                line-height: 200%;
            }    

            .content :global(img) {
                max-width: 100%;
            }

            .content :global(p) {
                margin-bottom: 0;
                word-break: break-word;
            }

            .content :global(ul) {
                padding-left: 1rem;
            }

            .content :global(h2) {
                margin-top: 1.5rem;
                margin-bottom: .75rem;
            }

            .content :global(h3) {
                margin-top: 1rem;
                margin-bottom: .25rem;
            }

            .content :global(h4) {
                margin-top: .75rem;
            }

            .content :global(a), .content :global(a *) {
                color: rgb(10, 28, 63);
                text-decoration: none;
            }
        `}</style>
    </div>;
}