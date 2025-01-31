import { loadEnvConfig } from '@next/env'

export default function BootstrapSheet() {
    const projectDir = process.cwd()
    loadEnvConfig(projectDir)
    console.log(projectDir);
    console.log(`ENV : ${process.env.ENV}`);
    console.log(`NEXT_PUBLIC_ASSET_PREFIX : ${process.env.NEXT_PUBLIC_ASSET_PREFIX}`);
    return (
        <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/bootstrap/css/bootstrap.min.css`}/>
    );
}
///*<link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>*/