import { useContext, useState, createContext } from "react";
import { Image } from "../models";

interface Modal {
	active: boolean;
	toggleActive: Function;
	setContent: Function;
	content: number;
	toggleSecond: Function;
	secondModal: boolean;
	secondContent: string;
	setSecondContent: Function;
}

const ModalContext = createContext<Modal | null>(null);
// const ModalUpdateContext = createContext<Function>(Function);
// const ModalContentContext = createContext<object>({});
// const ModalContentUpdateContext = createContext<Function>(Function);

export function useModal() {
	return useContext(ModalContext);
}

// export function useModalUpdate() {
// 	return useContext(ModalUpdateContext);
// }

// export function useModalContent() {
// 	return useContext(ModalContentContext);
// }

// export function useModalContentUpdate() {
// 	return useContext(ModalContextUpdateContext)
// }

export function ModalProvider({ children }: any) {
	const [active, setModalActive] = useState(false);
	const [content, setContent] = useState(0);
	const [secondModal, setSecondModal] = useState(false);
	const [secondContent, setSecondContent] = useState("");

	function toggleActive() {
		setModalActive(!active);
	}

	function toggleSecond() {
		setSecondModal(!secondModal);
	}

	return (
		<ModalContext.Provider
			value={{
				active,
				toggleActive,
				setContent,
				content,
				toggleSecond,
				secondModal,
				secondContent,
				setSecondContent,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}
