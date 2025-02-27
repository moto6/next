import { loadEnvConfig } from '@next/env'

export default function BootstrapScript() {
    const projectDir = process.cwd()
    loadEnvConfig(projectDir)
    // console.log(projectDir);
    // console.log(`ENV : ${process.env.ENVIRONMENT}`);
    // console.log('Base Path:', process.env.NEXT_PUBLIC_BASE_PATH);
    // console.log('Asset Prefix:', process.env.NEXT_PUBLIC_ASSET_PREFIX);
    return (
        <script src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/bootstrap/js/bootstrap.bundle.min.js`} defer/>
    );
}

{/*<script src="/bootstrap/js/bootstrap.bundle.min.js" defer></script>*/
}

//export default function BootstrapSheet() {
//     return (
//         <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/bootstrap/css/bootstrap.min.css`}/>
//     );
// }