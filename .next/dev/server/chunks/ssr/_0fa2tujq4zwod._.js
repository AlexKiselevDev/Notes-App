(()=>{"use strict";module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$NotesGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Notes/NotesGrid.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Home() {
    const [noteList, setNoteList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedNoteId, setSelectedNoteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadNotes = async ()=>{
            const response = await fetch("/api/notes");
            if (!response.ok) return;
            const data = await response.json();
            setNoteList(data.map((note)=>({
                    id: note.id,
                    content: note.content,
                    date: new Date(note.createdAt).toLocaleString("en-US", {
                        day: "numeric",
                        month: "long",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })));
        };
        loadNotes();
    }, []);
    const handleCreateNote = async (content)=>{
        const response = await fetch("/api/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content
            })
        });
        if (!response.ok) {
            console.error("Failed to create note:", await response.text());
            return;
        }
        const createdNote = await response.json();
        const newNote = {
            id: createdNote.id,
            content: createdNote.content,
            date: "Just now"
        };
        setNoteList((currentNotes)=>[
                newNote,
                ...currentNotes
            ]);
        setSelectedNoteId(newNote.id);
        setIsCreating(false);
    };
    const handleSaveNote = async (id, content)=>{
        const response = await fetch(`/api/notes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content
            })
        });
        if (!response.ok) {
            console.error("Failed to update note:", await response.text());
            return;
        }
        const updatedNote = await response.json();
        setNoteList((currentNotes)=>currentNotes.map((note)=>note.id === updatedNote.id ? {
                    ...note,
                    content: updatedNote.content
                } : note));
    };
    const handleDeleteNote = async (id)=>{
        const response = await fetch(`/api/notes/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            console.error("Failed to delete note:", await response.text());
            return;
        }
        setNoteList((currentNotes)=>currentNotes.filter((note)=>note.id !== id));
        setSelectedNoteId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen px-10 py-8",
        onClick: ()=>{
            setSelectedNoteId(null);
            setIsCreating(false);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[26px] font-semibold leading-8 text-gray-900",
                        children: "Notes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Create note",
                        onClick: (event)=>{
                            event.stopPropagation();
                            setIsCreating(true);
                            setSelectedNoteId(null);
                        },
                        className: "flex h-10 w-10 items-center justify-center rounded-full cursor-pointer bg-[#262626] text-2xl font-light leading-none text-white transition-colors hover:bg-[#3D3D3D]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19Z",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: (event)=>event.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$NotesGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    notes: noteList,
                    selectedNoteId: selectedNoteId,
                    isCreating: isCreating,
                    onCreate: handleCreateNote,
                    onCancelCreate: ()=>setIsCreating(false),
                    onSelect: setSelectedNoteId,
                    onSave: handleSaveNote,
                    onDelete: handleDeleteNote
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Notes/CreateNoteForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateNoteForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CreateNoteForm({ onCreate, onCancel }) {
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const trimmedContent = content.trim();
        if (!trimmedContent) {
            return;
        }
        onCreate(trimmedContent);
        setContent("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex min-h-[228px] max-h-[228px] min-w-[239px] max-w-[239px] flex-col items-start justify-start cursor-pointer overflow-hidden rounded-[24px] border bg-white p-5 text-left shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)] transition-all border-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: content,
                onChange: (event)=>setContent(event.target.value),
                autoFocus: true,
                placeholder: "Write a note...",
                className: "h-[130px] w-full resize-none bg-transparent line-clamp-8 whitespace-pre-wrap break-words text-[16px] font-medium leading-[24px] tracking-[0.0048em] text-[#262626] outline-none placeholder:text-[#A1A1A1]"
            }, void 0, false, {
                fileName: "[project]/src/components/Notes/CreateNoteForm.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[100%] mt-4 flex justify-end gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Notes/CreateNoteForm.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: !content.trim(),
                        className: "rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40",
                        children: "Create"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Notes/CreateNoteForm.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Notes/CreateNoteForm.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Notes/CreateNoteForm.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Notes/NoteCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoteCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function NoteCard({ content, date, selected = false, onClick, onSave, onDelete }) {
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(content);
    const articleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const savedContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(content);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setDraft(content);
        savedContentRef.current = content;
    }, [
        content
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isEditing) {
            textareaRef.current?.focus();
            textareaRef.current?.setSelectionRange(textareaRef.current.value.length, textareaRef.current.value.length);
        }
    }, [
        isEditing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isEditing) return;
        const handleOutsideClick = (event)=>{
            if (articleRef.current && !articleRef.current.contains(event.target)) {
                setIsEditing(false);
                if (draft.trim() && draft !== savedContentRef.current) {
                    onSave(draft);
                } else {
                    setDraft(savedContentRef.current);
                }
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return ()=>{
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [
        isEditing,
        draft,
        onSave
    ]);
    const handleStartEditing = ()=>{
        if (!isEditing) {
            onClick();
            setIsEditing(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        ref: articleRef,
        className: "relative w-fit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleStartEditing,
                className: `box-border flex h-[228px] min-h-[228px] w-[239px] min-w-[239px] max-w-[239px] flex-col items-start justify-start cursor-text rounded-[24px] border bg-white p-5 text-left shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)] transition-colors ${selected ? "border-[#ED6AFF]" : "border-transparent"}`,
                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    ref: textareaRef,
                    value: draft,
                    onChange: (event)=>setDraft(event.target.value),
                    onClick: (event)=>event.stopPropagation(),
                    className: "border-box min-h-[180px] w-full resize-none bg-transparent text-[16px] font-medium leading-[24px] tracking-[0.0048em] text-[#262626] outline-none",
                    "aria-label": "Edit note"
                }, void 0, false, {
                    fileName: "[project]/src/components/Notes/NoteCard.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "line-clamp-8 whitespace-pre-wrap break-words text-[16px] font-medium leading-[24px] tracking-[0.0048em] text-[#262626]",
                    children: content
                }, void 0, false, {
                    fileName: "[project]/src/components/Notes/NoteCard.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Notes/NoteCard.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-center text-[14px] font-normal leading-[21px] tracking-[0.0042em] text-[#737373]",
                children: date
            }, void 0, false, {
                fileName: "[project]/src/components/Notes/NoteCard.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: async (event)=>{
                            event.stopPropagation();
                            try {
                                await navigator.clipboard.writeText(isEditing ? draft : content);
                            } catch (error) {
                                console.error("Failed to copy note:", error);
                            }
                        },
                        "aria-label": "Copy note",
                        title: "Copy note",
                        className: "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-sm shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    clipPath: "url(#clip0_26_42)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M15.75 9.15015C15.75 8.71774 15.7491 8.43834 15.7317 8.22583C15.715 8.02212 15.6869 7.94648 15.668 7.90943C15.5962 7.7685 15.4816 7.65394 15.3406 7.58203C15.3035 7.56315 15.2279 7.53496 15.0242 7.51831C14.8117 7.50095 14.5323 7.5 14.0999 7.5H9.15015C8.71774 7.5 8.43834 7.50095 8.22583 7.51831C8.02212 7.53496 7.94648 7.56315 7.90943 7.58203C7.76845 7.65391 7.65391 7.76845 7.58203 7.90943C7.56315 7.94648 7.53496 8.02212 7.51831 8.22583C7.50095 8.43834 7.5 8.71774 7.5 9.15015V14.0999C7.5 14.5323 7.50095 14.8117 7.51831 15.0242C7.53496 15.2279 7.56315 15.3035 7.58203 15.3406C7.65394 15.4816 7.7685 15.5962 7.90943 15.668C7.94648 15.6869 8.02212 15.715 8.22583 15.7317C8.43834 15.7491 8.71774 15.75 9.15015 15.75H14.0999C14.5323 15.75 14.8117 15.7491 15.0242 15.7317C15.2279 15.715 15.3035 15.6869 15.3406 15.668C15.4816 15.5961 15.5961 15.4816 15.668 15.3406C15.6869 15.3035 15.715 15.2279 15.7317 15.0242C15.7491 14.8117 15.75 14.5323 15.75 14.0999V9.15015ZM10.5 3.75C10.5 3.39029 10.4997 3.15797 10.4876 2.98023C10.4759 2.80928 10.4558 2.74412 10.4429 2.71289C10.3668 2.52923 10.2208 2.38326 10.0371 2.30713C10.0059 2.29419 9.9407 2.27412 9.76978 2.26245C9.59204 2.25033 9.35973 2.25 9 2.25H3.90015C3.46774 2.25 3.18834 2.25095 2.97583 2.26831C2.77214 2.28496 2.6965 2.31314 2.65943 2.33203C2.51845 2.40391 2.40391 2.51845 2.33203 2.65943C2.31314 2.6965 2.28496 2.77214 2.26831 2.97583C2.25095 3.18834 2.25 3.46774 2.25 3.90015V9C2.25 9.35973 2.25033 9.59204 2.26245 9.76978C2.27412 9.9407 2.29419 10.0059 2.30713 10.0371C2.38326 10.2208 2.52923 10.3668 2.71289 10.4429C2.74412 10.4558 2.80928 10.4759 2.98023 10.4876C3.15797 10.4997 3.39029 10.5 3.75 10.5C4.16422 10.5 4.5 10.8358 4.5 11.25C4.5 11.6642 4.16422 12 3.75 12C3.41089 12 3.11901 12.0003 2.87842 11.9839C2.63106 11.967 2.3831 11.9298 2.13868 11.8286C1.58757 11.6002 1.14973 11.1623 0.92139 10.6113C0.820156 10.3669 0.782995 10.119 0.766117 9.87159C0.749712 9.63099 0.750003 9.33911 0.750003 9V3.90015C0.750003 3.49249 0.749198 3.14127 0.772708 2.85352C0.796942 2.55708 0.850797 2.262 0.995365 1.97827C1.21104 1.5551 1.5551 1.21104 1.97827 0.995365C2.262 0.850797 2.55708 0.796942 2.85352 0.772708C3.14127 0.749198 3.49249 0.750003 3.90015 0.750003H9C9.33911 0.750003 9.63099 0.749712 9.87159 0.766117C10.119 0.782995 10.3669 0.820156 10.6113 0.92139C11.1623 1.14973 11.6002 1.58757 11.8286 2.13868C11.9298 2.3831 11.967 2.63106 11.9839 2.87842C12.0003 3.11901 12 3.41089 12 3.75C12 4.16422 11.6642 4.5 11.25 4.5C10.8358 4.5 10.5 4.16422 10.5 3.75ZM17.25 14.0999C17.25 14.5075 17.2508 14.8587 17.2273 15.1465C17.2031 15.4429 17.1492 15.738 17.0046 16.0217C16.789 16.4449 16.4449 16.789 16.0217 17.0046C15.738 17.1492 15.4429 17.2031 15.1465 17.2273C14.8587 17.2508 14.5075 17.25 14.0999 17.25H9.15015C8.74249 17.25 8.39128 17.2508 8.10352 17.2273C7.80707 17.2031 7.51201 17.1492 7.22828 17.0046C6.80505 16.789 6.46101 16.4448 6.24536 16.0217C6.10079 15.738 6.04694 15.4429 6.02271 15.1465C5.9992 14.8587 6 14.5075 6 14.0999V9.15015C6 8.74249 5.9992 8.39128 6.02271 8.10352C6.04694 7.80707 6.10079 7.51201 6.24536 7.22828C6.46104 6.80511 6.80511 6.46104 7.22828 6.24536C7.51201 6.10079 7.80707 6.04694 8.10352 6.02271C8.39128 5.9992 8.74249 6 9.15015 6H14.0999C14.5075 6 14.8587 5.9992 15.1465 6.02271C15.4429 6.04694 15.738 6.10079 16.0217 6.24536C16.4448 6.46101 16.789 6.80505 17.0046 7.22828C17.1492 7.51201 17.2031 7.80707 17.2273 8.10352C17.2508 8.39128 17.25 8.74249 17.25 9.15015V14.0999Z",
                                        fill: "#262626"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Notes/NoteCard.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Notes/NoteCard.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                        id: "clip0_26_42",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "18",
                                            height: "18",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Notes/NoteCard.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Notes/NoteCard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Notes/NoteCard.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Notes/NoteCard.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Notes/NoteCard.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (event)=>{
                            event.stopPropagation();
                            onDelete();
                        },
                        "aria-label": "Delete note",
                        className: "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-sm shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M17.5 4.16666C17.9602 4.16666 18.3333 4.53975 18.3333 4.99999C18.3333 5.46023 17.9602 5.83332 17.5 5.83332H16.613L16.0807 13.8216C16.0378 14.4658 16.0025 14.9975 15.9391 15.4289C15.8743 15.8704 15.7717 16.2744 15.5575 16.6504C15.224 17.2356 14.7206 17.7059 14.1146 17.9997C13.7252 18.1883 13.3159 18.2638 12.8711 18.2991C12.4365 18.3336 11.9037 18.3333 11.2581 18.3333H8.74187C8.09626 18.3333 7.56351 18.3336 7.12891 18.2991C6.68415 18.2638 6.27478 18.1883 5.88542 17.9997C5.27932 17.7059 4.776 17.2356 4.44255 16.6504C4.22833 16.2744 4.1257 15.8704 4.06088 15.4289C3.99755 14.9975 3.96222 14.4658 3.91928 13.8216L3.38705 5.83332H2.50001C2.03977 5.83332 1.66667 5.46023 1.66667 4.99999C1.66667 4.53975 2.03977 4.16666 2.50001 4.16666H17.5ZM5.58269 13.7109C5.6274 14.3816 5.65814 14.8364 5.70964 15.1872C5.75967 15.5278 5.82129 15.7026 5.89112 15.8252C6.05785 16.1177 6.30916 16.353 6.61215 16.4998L6.71875 16.5438C6.83858 16.5849 7.00334 16.6177 7.26075 16.6382C7.61416 16.6662 8.06975 16.6667 8.74187 16.6667H11.2581C11.9302 16.6667 12.3858 16.6662 12.7393 16.6382C13.0825 16.6109 13.2609 16.5613 13.3879 16.4998L13.4994 16.4404C13.7526 16.293 13.9631 16.081 14.1089 15.8252C14.1787 15.7026 14.2403 15.5278 14.2904 15.1872C14.3419 14.8364 14.3726 14.3816 14.4173 13.7109L14.9422 5.83332H5.05778L5.58269 13.7109ZM7.5 12.9167V8.74999C7.5 8.28975 7.8731 7.91666 8.33334 7.91666C8.79358 7.91666 9.16667 8.28975 9.16667 8.74999V12.9167C9.16667 13.3769 8.79358 13.75 8.33334 13.75C7.8731 13.75 7.5 13.3769 7.5 12.9167ZM10.8333 12.9167V8.74999C10.8333 8.28975 11.2064 7.91666 11.6667 7.91666C12.1269 7.91666 12.5 8.28975 12.5 8.74999V12.9167C12.5 13.3769 12.1269 13.75 11.6667 13.75C11.2064 13.75 10.8333 13.3769 10.8333 12.9167ZM12.5 1.66666C12.9602 1.66666 13.3333 2.03975 13.3333 2.49999C13.3333 2.96023 12.9602 3.33332 12.5 3.33332H7.5C7.03977 3.33332 6.66667 2.96023 6.66667 2.49999C6.66667 2.03975 7.03977 1.66666 7.5 1.66666H12.5Z",
                                fill: "#262626"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Notes/NoteCard.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Notes/NoteCard.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Notes/NoteCard.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Notes/NoteCard.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Notes/NoteCard.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Notes/NotesGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotesGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$CreateNoteForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Notes/CreateNoteForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$NoteCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Notes/NoteCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function NotesGrid({ notes, selectedNoteId, isCreating, onCreate, onCancelCreate, onSelect, onSave, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-[repeat(auto-fill,239px)] justify-start gap-x-8 gap-y-8",
        onClick: (event)=>event.stopPropagation(),
        children: [
            isCreating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$CreateNoteForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onCreate: onCreate,
                onCancel: onCancelCreate
            }, void 0, false, {
                fileName: "[project]/src/components/Notes/NotesGrid.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$NoteCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    content: note.content,
                    date: note.date,
                    selected: selectedNoteId === note.id,
                    onClick: ()=>onSelect(note.id),
                    onSave: (content)=>onSave(note.id, content),
                    onDelete: ()=>onDelete(note.id)
                }, note.id, false, {
                    fileName: "[project]/src/components/Notes/NotesGrid.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Notes/NotesGrid.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
];})()

//# sourceMappingURL=_0fa2tujq4zwod._.js.map