import { useFormStore } from "../store";
import { InpField } from "../Interfaces/StoreInterfaces";

const Home = () => {
    let {
        formElements,
        label,
        setlabel,
        settype,
        add,
        remove,
        reset,
    } = useFormStore();

    return (
        <div className="dark:bg-gray-800 dark:text-white p-4">
            <div className="mb-4 p-4 border dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900">
                <input
                    type="text"
                    name="label"
                    value={label}
                    onChange={(e) => setlabel(e.target.value)}
                    id="label"
                    placeholder="Enter the label for field"
                    className="w-full p-2 mb-2 border dark:border-gray-700 rounded-md text-black dark:text-white bg-white dark:bg-gray-800"
                />
                <select
                    name="type"
                    id="type"
                    onChange={(e) =>
                        settype(
                            e.target.value as
                                | "number"
                                | "text"
                                | "textarea"
                                | "file"
                                | "password"
                        )
                    }
                    className="w-full p-2 mb-2 border dark:border-gray-700 rounded-md text-black dark:text-white bg-white dark:bg-gray-800"
                >
                    <option value="number">Number</option>
                    <option value="text">Text</option>
                    <option value="textarea">Textarea</option>
                    <option value="file">File</option>
                    <option value="password">Password</option>
                    <option value="radio">Radio</option>
                </select>
                <div className="buttons flex justify-between">
                    <button
                        onClick={add}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add
                    </button>
                    <button
                        onClick={reset}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div>
                {formElements.map((item: InpField, ind: number) =>
                    item.type !== "textarea" ? (
                        <div
                            key={ind}
                            className="mb-4 p-4 border dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900"
                        >
                            <label
                                htmlFor={String(ind)}
                                className="block text-sm font-medium dark:text-gray-300"
                            >
                                {item.label}
                            </label>
                            <input
                                type={item.type}
                                id={String(ind)}
                                className="w-full p-2 mt-1 border dark:border-gray-700 rounded-md text-black dark:text-white bg-white dark:bg-gray-800"
                            />
                            <button
                                onClick={() => remove(ind)}
                                className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ) : (
                        <div
                            key={ind}
                            className="mb-4 p-4 border dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900"
                        >
                            <label
                                htmlFor={String(ind)}
                                className="block text-sm font-medium dark:text-gray-300"
                            >
                                {item.label}
                            </label>
                            <textarea
                                id={String(ind)}
                                rows={4}
                                cols={12}
                                className="w-full p-2 mt-1 border dark:border-gray-700 rounded-md text-black dark:text-white bg-white dark:bg-gray-800"
                            />
                            <button
                                onClick={() => remove(ind)}
                                className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Home;
