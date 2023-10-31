import { useLocation } from "react-router-dom";

interface ModalTextareaProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalTextarea: React.FC<ModalTextareaProps> = ({
  description,
  setDescription,
}) => {
  const { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    text = `Введите описание ${isCategories ? "категории" : "задачи"}`;  
  return (
    <div className="modaltextarea-wrapper">
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        id="modaltextarea"
        className="modaltextarea"
        placeholder={text}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
