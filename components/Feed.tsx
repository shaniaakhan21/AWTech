import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your access token
    const userId = 'YOUR_USER_ID'; // Replace with your user ID

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await fetch(
                    `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
                );
                const data = await response.json();
                setPosts(data.data);
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            }
        };

        fetchInstagramPosts();
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            <h1 className="text-center">Explore Our Instagram Feed</h1>
            <h6 className="text-center mb-4">Explore the results of our dedication to transforming spaces.</h6>
            <div className="flex animate-scroll whitespace-nowrap">
                {posts.map((post) => (
                    <div key={post.id} className="inline-block p-2">
                        <Image
                            src={post.media_url}
                            alt={post.caption}
                            className="w-64 h-64 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                .animate-scroll {
                    animation: scroll 15s linear infinite;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </div>
    );
};

export default Feed;
