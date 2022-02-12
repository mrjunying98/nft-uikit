import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          size="sm"
          style={{backgroundColor: "#000000", color: "#FFFFFF", lineHeight: "16px", fontSize: "0.88rem", boxShadow:"-0.16em -0.2em #FFFF00, 0.16em 0.2em #0000FF"}}
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          style={{backgroundColor: "#000000", color: "#FFFFFF", lineHeight: "16px", fontSize: "0.88rem", boxShadow:"-0.16em -0.2em #FFFF00, 0.16em 0.2em #0000FF"}}
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
