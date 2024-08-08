const isHasPermission = (permissions) => {
    let isHome = false, isCampaign = false, isSettings = false;

    if (permissions?.includes('home_access')) {
        isHome = true;
    }
    if (permissions?.includes('campaign_access')) {
        isCampaign = true;
    }
    if (permissions?.includes('settings_access')) {
        isSettings = true;
    }

    return { isHome, isCampaign, isSettings };
}

export default {
    isHasPermission
}