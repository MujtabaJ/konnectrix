export interface IOrganisationProps {
    organisationItems: Array<{ name: string, notifications: string }>
}

export interface IOrganisationItemProps {
    title: string;
    count: string
}

export interface IIconContainer {
    title: string;
    icon: boolean;
    iconName?: string;
    open?: boolean;
    chevron?: boolean
}

export interface INetworkItemProps {
    networkDetails: any
    count?: number
}

export interface IMyNetworks {
    myNetworks: Array<string>;
}