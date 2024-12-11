/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'firebasestorage.googleapis.com',
                port:'',
                pathname:'/v0/b/dcc-nita.appspot.com/o/*'
            },
            {
                protocol:'https',
                hostname:'res.cloudinary.com',
                port:'',
            },
            {
                protocol:'https',
                hostname:'i.postimg.cc',
                port:'',
            }
        ]
    }
};

export default nextConfig;
