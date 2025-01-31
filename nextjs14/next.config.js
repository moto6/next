const nextConfig = {
    output: 'export',
    productionBrowserSourceMaps: false,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
}

module.exports = nextConfig