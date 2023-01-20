type Props = { user: {name: string} };
export const UserInfo = (props: Props) => <div>{props.user.name}</div>;
