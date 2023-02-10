import fs from 'fs-extra';

fs.copySync('./.svelte-kit/output/prerendered/pages', './.svelte-kit/output/client');
