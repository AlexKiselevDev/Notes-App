module.exports = [
  "[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)",
  (__turbopack_context__, module, exports) => {
    var mod = __turbopack_context__.x(
      "next/dist/compiled/next-server/app-page-turbo.runtime.dev.js",
      () =>
        require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"),
    );

    module.exports = mod;
  },
  "[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)",
  (__turbopack_context__, module, exports) => {
    "use strict";

    if (("TURBOPACK compile-time falsy", 0)) //TURBOPACK unreachable
    ;
    else {
      if (("TURBOPACK compile-time falsy", 0)) //TURBOPACK unreachable
      ;
      else {
        if (("TURBOPACK compile-time truthy", 1)) {
          if (("TURBOPACK compile-time truthy", 1)) {
            module.exports = __turbopack_context__.r(
              "[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)",
            );
          } //TURBOPACK unreachable
          else;
        } //TURBOPACK unreachable
        else;
      }
    }
  },
  "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
  (__turbopack_context__, module, exports) => {
    "use strict";

    module.exports = __turbopack_context__.r(
      "[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)",
    ).vendored["react-ssr"].ReactJsxDevRuntime;
  },
  "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
  (__turbopack_context__, module, exports) => {
    "use strict";

    module.exports = __turbopack_context__.r(
      "[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)",
    ).vendored["react-ssr"].React;
  },
  "[project]/src/app/page.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Home]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$CreateNoteForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/components/Notes/CreateNoteForm.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$NotesGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/components/Notes/NotesGrid.tsx [app-ssr] (ecmascript)",
      );
    ("use client");
    function Home() {
      const [noteList, setNoteList] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])([]);
      const [selectedNoteId, setSelectedNoteId] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(null);
      const [editingNoteId, setEditingNoteId] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(null);
      const [isCreating, setIsCreating] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(false);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(() => {
        const loadNotes = async () => {
          const response = await fetch("/api/notes");
          if (!response.ok) {
            console.error("Failed to load notes");
            return;
          }
          const data = await response.json();
          setNoteList(
            data.map((note) => ({
              id: note.id,
              content: note.content,
              date: new Date(note.createdAt).toLocaleString("en-US", {
                day: "numeric",
                month: "long",
                hour: "numeric",
                minute: "2-digit",
              }),
            })),
          );
        };
        loadNotes();
      }, []);
      const handleCreateNote = async (content) => {
        const response = await fetch("/api/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content,
          }),
        });
        if (!response.ok) {
          const errorText = await response.text();
          console.error("POST status:", response.status);
          console.error("POST response:", errorText);
          return;
        }
        const createdNote = await response.json();
        const newNote = {
          id: createdNote.id,
          content: createdNote.content,
          date: "Just now",
        };
        setNoteList((currentNotes) => [newNote, ...currentNotes]);
        setSelectedNoteId(newNote.id);
        setIsCreating(false);
      };
      const handleEditNote = (id) => {
        setEditingNoteId(id);
        setSelectedNoteId(id);
      };
      const handleSaveNote = async (content) => {
        if (editingNoteId === null) {
          return;
        }
        const response = await fetch(`/api/notes/${editingNoteId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content,
          }),
        });
        if (!response.ok) {
          console.error("Failed to update note");
          return;
        }
        const updatedNote = await response.json();
        setNoteList((currentNotes) =>
          currentNotes.map((note) =>
            note.id === updatedNote.id
              ? {
                  ...note,
                  content: updatedNote.content,
                }
              : note,
          ),
        );
        setEditingNoteId(null);
      };
      const handleDeleteNote = async (id) => {
        const response = await fetch(`/api/notes/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          const errorText = await response.text();
          console.error("DELETE status:", response.status);
          console.error("DELETE response:", errorText);
          return;
        }
        setNoteList((currentNotes) =>
          currentNotes.filter((note) => note.id !== id),
        );
        setSelectedNoteId(null);
        setEditingNoteId(null);
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "main",
        {
          className: "min-h-screen px-10 py-8",
          onClick: (event) => {
            if (event.target === event.currentTarget) {
              setSelectedNoteId(null);
              setEditingNoteId(null);
            }
          },
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "header",
              {
                className: "mb-6 flex items-center justify-between",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "h1",
                    {
                      className:
                        "text-[26px] font-semibold leading-8 text-[#262626]",
                      children: "Notes",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/page.tsx",
                      lineNumber: 152,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Create note",
                      onClick: () => {
                        setIsCreating(true);
                        setEditingNoteId(null);
                      },
                      className:
                        "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#262626] transition-colors hover:bg-[#404040]",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "svg",
                        {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "path",
                            {
                              d: "M11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19Z",
                              fill: "white",
                            },
                            void 0,
                            false,
                            {
                              fileName: "[project]/src/app/page.tsx",
                              lineNumber: 172,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/app/page.tsx",
                          lineNumber: 165,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/page.tsx",
                      lineNumber: 156,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 151,
                columnNumber: 7,
              },
              this,
            ),
            isCreating &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className: "mb-6",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$CreateNoteForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "default"
                    ],
                    {
                      onCreate: handleCreateNote,
                      onCancel: () => setIsCreating(false),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/page.tsx",
                      lineNumber: 182,
                      columnNumber: 11,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/app/page.tsx",
                  lineNumber: 181,
                  columnNumber: 9,
                },
                this,
              ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$NotesGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {
                notes: noteList,
                selectedNoteId: selectedNoteId,
                editingNoteId: editingNoteId,
                onSelect: (id) => {
                  setSelectedNoteId(id);
                  setEditingNoteId(null);
                },
                onEdit: handleEditNote,
                onSave: handleSaveNote,
                onCancelEdit: () => setEditingNoteId(null),
                onDelete: handleDeleteNote,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 189,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/src/app/page.tsx",
          lineNumber: 142,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/src/components/Notes/CreateNoteForm.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => CreateNoteForm]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    ("use client");
    function CreateNoteForm({ onCreate, onCancel }) {
      const [content, setContent] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])("");
      const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedContent = content.trim();
        if (!trimmedContent) {
          return;
        }
        onCreate(trimmedContent);
        setContent("");
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "form",
        {
          onSubmit: handleSubmit,
          className:
            "flex min-h-[228px] min-w-[239px] max-w-[239px] flex-col items-start justify-start cursor-pointer overflow-hidden rounded-[24px] border bg-white p-5 text-left shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)] transition-all border-transparent",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "textarea",
              {
                value: content,
                onChange: (event) => setContent(event.target.value),
                autoFocus: true,
                placeholder: "Write a note...",
                className:
                  "h-[130px] w-full resize-none bg-transparent text-[15px] leading-[21px] text-gray-900 outline-none placeholder:text-gray-400",
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/Notes/CreateNoteForm.tsx",
                lineNumber: 29,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "w-[100%] mt-4 flex justify-end gap-2",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      type: "button",
                      onClick: onCancel,
                      className:
                        "rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100",
                      children: "Cancel",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/Notes/CreateNoteForm.tsx",
                      lineNumber: 37,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      type: "submit",
                      disabled: !content.trim(),
                      className:
                        "rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40",
                      children: "Create",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/Notes/CreateNoteForm.tsx",
                      lineNumber: 44,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/Notes/CreateNoteForm.tsx",
                lineNumber: 36,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/src/components/Notes/CreateNoteForm.tsx",
          lineNumber: 25,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/src/components/Notes/EditNoteForm.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => EditNoteFrom]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
      );
    ("use client");
    function EditNoteFrom({ initialContent, onSave, onCancel }) {
      const [content, setContent] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(initialContent);
      const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedContent = content.trim();
        if (!trimmedContent) {
          return;
        }
        onSave(trimmedContent);
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "form",
        {
          onSubmit: handleSubmit,
          className:
            "min-h-[228px] max-h-[228px] min-w-[239px] max-w-[239px] rounded-[24px] border border-fuchsia-400 bg-white p-5 shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)]",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "textarea",
              {
                value: content,
                onChange: (event) => setContent(event.target.value),
                autoFocus: true,
                className:
                  "h-[130px] w-full resize-none bg-transparent text-[15px] leading-[21px] text-gray-900 outline-none",
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/Notes/EditNoteForm.tsx",
                lineNumber: 30,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "mt-4 flex justify-end gap-2",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      type: "button",
                      onClick: onCancel,
                      className:
                        "rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100",
                      children: "Cancel",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/Notes/EditNoteForm.tsx",
                      lineNumber: 37,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      type: "submit",
                      disabled: !content.trim(),
                      className:
                        "rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40",
                      children: "Save",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/src/components/Notes/EditNoteForm.tsx",
                      lineNumber: 44,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/Notes/EditNoteForm.tsx",
                lineNumber: 36,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/src/components/Notes/EditNoteForm.tsx",
          lineNumber: 26,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/src/components/Notes/NoteCard.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => NoteCard]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    function NoteCard({
      content,
      date,
      selected = false,
      onClick,
      onEdit,
      onDelete,
    }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "article",
        {
          className: "relative w-fit",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "button",
              {
                type: "button",
                onClick: (event) => {
                  event.stopPropagation();
                  onClick();
                },
                className: `flex min-h-[228px] min-w-[239px] max-w-[239px] flex-col items-start justify-start cursor-pointer overflow-hidden rounded-[24px] border bg-white p-5 text-left shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)] transition-all ${selected ? "border-[#ED6AFF]" : "border-transparent"}`,
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "p",
                  {
                    className:
                      "line-clamp-8 text-[16px] font-medium leading-[24px] tracking-[0.0048em] text-[#262626]",
                    children: content,
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/Notes/NoteCard.tsx",
                    lineNumber: 30,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/Notes/NoteCard.tsx",
                lineNumber: 20,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "p",
              {
                className:
                  "mt-2 text-center text-[14px] font-normal leading-[21px] tracking-[0.0042em] text-[#737373]",
                children: date,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/Notes/NoteCard.tsx",
                lineNumber: 34,
                columnNumber: 7,
              },
              this,
            ),
            selected &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-4",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "button",
                      {
                        type: "button",
                        onClick: (event) => {
                          event.stopPropagation();
                          onEdit();
                        },
                        "aria-label": "Edit note",
                        className:
                          "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-sm shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)] transition-colors",
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "svg",
                          {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "path",
                              {
                                d: "M12.2197 1.71951C13.341 0.598332 15.1589 0.598347 16.2803 1.71951C17.4016 2.84079 17.4015 4.65872 16.2803 5.78005L6.37571 15.6853C6.22605 15.835 6.09257 15.9709 5.94871 16.0867L5.80003 16.1958C5.63077 16.3074 5.44718 16.3956 5.25437 16.458C5.02044 16.5337 4.77658 16.5572 4.49631 16.5884L1.95774 16.8704C1.73131 16.8955 1.5058 16.8161 1.3447 16.6551C1.18367 16.494 1.10422 16.2684 1.12937 16.042L1.41135 13.5042C1.4425 13.2239 1.46593 12.9795 1.54172 12.7454C1.60419 12.5524 1.69246 12.3688 1.80393 12.1997C1.93943 11.9942 2.11598 11.824 2.31516 11.6248V11.624L12.2197 1.71951ZM3.37571 12.6853C3.13374 12.9273 3.08856 12.9771 3.05637 13.0259C3.01918 13.0824 2.98995 13.1435 2.96922 13.2075C2.95119 13.2632 2.94033 13.3298 2.90256 13.6697L2.72385 15.2759L4.33006 15.0979L4.6677 15.0569C4.73376 15.0472 4.76429 15.0396 4.79221 15.0305C4.85644 15.0098 4.91754 14.9805 4.97385 14.9434C5.02294 14.911 5.07348 14.8657 5.31516 14.624L12.4394 7.49978L10.5 5.56033L3.37571 12.6853ZM15.2197 2.78006C14.6842 2.24468 13.8158 2.24466 13.2803 2.78006L11.5605 4.49978L13.5 6.43923L15.2197 4.71951C15.7552 4.18397 15.7552 3.31556 15.2197 2.78006Z",
                                fill: "#262626",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/Notes/NoteCard.tsx",
                                lineNumber: 55,
                                columnNumber: 15,
                              },
                              this,
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/components/Notes/NoteCard.tsx",
                            lineNumber: 48,
                            columnNumber: 13,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/components/Notes/NoteCard.tsx",
                        lineNumber: 39,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "button",
                      {
                        type: "button",
                        onClick: (event) => {
                          event.stopPropagation();
                          onDelete();
                        },
                        "aria-label": "Delete note",
                        className:
                          "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-sm shadow-[0px_0px_1px_rgba(0,0,0,0.16),0px_3px_8px_rgba(0,0,0,0.06)] transition-colors",
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "svg",
                          {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "path",
                              {
                                d: "M17.5 4.16666C17.9602 4.16666 18.3333 4.53975 18.3333 4.99999C18.3333 5.46023 17.9602 5.83332 17.5 5.83332H16.6129L16.0807 13.8216C16.0378 14.4658 16.0024 14.9975 15.9391 15.4289C15.8743 15.8704 15.7717 16.2744 15.5574 16.6504C15.224 17.2356 14.7206 17.7059 14.1146 17.9997C13.7252 18.1883 13.3158 18.2638 12.8711 18.2991C12.4365 18.3336 11.9037 18.3333 11.2581 18.3333H8.74185C8.09624 18.3333 7.56349 18.3336 7.1289 18.2991C6.68413 18.2638 6.27476 18.1883 5.88541 17.9997C5.2793 17.7059 4.77599 17.2356 4.44254 16.6504C4.22832 16.2744 4.12568 15.8704 4.06086 15.4289C3.99754 14.9975 3.96221 14.4658 3.91926 13.8216L3.38703 5.83332H2.49999C2.03975 5.83332 1.66666 5.46023 1.66666 4.99999C1.66666 4.53975 2.03975 4.16666 2.49999 4.16666H17.5ZM5.58267 13.7109C5.62738 14.3816 5.65812 14.8364 5.70963 15.1872C5.75965 15.5278 5.82127 15.7026 5.8911 15.8252C6.05783 16.1177 6.30914 16.353 6.61213 16.4998L6.71874 16.5438C6.83856 16.5849 7.00332 16.6177 7.26073 16.6382C7.61414 16.6662 8.06974 16.6667 8.74185 16.6667H11.2581C11.9302 16.6667 12.3858 16.6662 12.7392 16.6382C13.0825 16.6109 13.2609 16.5613 13.3878 16.4998L13.4993 16.4404C13.7526 16.293 13.9631 16.081 14.1089 15.8252C14.1787 15.7026 14.2403 15.5278 14.2904 15.1872C14.3419 14.8364 14.3726 14.3816 14.4173 13.7109L14.9422 5.83332H5.05777L5.58267 13.7109ZM7.49999 12.9167V8.74999C7.49999 8.28975 7.87309 7.91666 8.33332 7.91666C8.79356 7.91666 9.16666 8.28975 9.16666 8.74999V12.9167C9.16666 13.3769 8.79356 13.75 8.33332 13.75C7.87309 13.75 7.49999 13.3769 7.49999 12.9167ZM10.8333 12.9167V8.74999C10.8333 8.28975 11.2064 7.91666 11.6667 7.91666C12.1269 7.91666 12.5 8.28975 12.5 8.74999V12.9167C12.5 13.3769 12.1269 13.75 11.6667 13.75C11.2064 13.75 10.8333 13.3769 10.8333 12.9167ZM12.5 1.66666C12.9602 1.66666 13.3333 2.03975 13.3333 2.49999C13.3333 2.96023 12.9602 3.33332 12.5 3.33332H7.49999C7.03975 3.33332 6.66666 2.96023 6.66666 2.49999C6.66666 2.03975 7.03975 1.66666 7.49999 1.66666H12.5Z",
                                fill: "#262626",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/components/Notes/NoteCard.tsx",
                                lineNumber: 77,
                                columnNumber: 15,
                              },
                              this,
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/components/Notes/NoteCard.tsx",
                            lineNumber: 70,
                            columnNumber: 13,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/components/Notes/NoteCard.tsx",
                        lineNumber: 61,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/components/Notes/NoteCard.tsx",
                  lineNumber: 38,
                  columnNumber: 9,
                },
                this,
              ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/src/components/Notes/NoteCard.tsx",
          lineNumber: 19,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  "[project]/src/components/Notes/NotesGrid.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => NotesGrid]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$EditNoteForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/components/Notes/EditNoteForm.tsx [app-ssr] (ecmascript)",
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$NoteCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/components/Notes/NoteCard.tsx [app-ssr] (ecmascript)",
      );
    ("use client");
    function NotesGrid({
      notes,
      selectedNoteId,
      editingNoteId,
      onSelect,
      onEdit,
      onSave,
      onCancelEdit,
      onDelete,
    }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className:
            "grid grid-cols-[repeat(auto-fill,239px)] justify-start gap-x-8 gap-y-8",
          onClick: (event) => {
            event.stopPropagation();
          },
          children: notes.map((note) => {
            const isEditing = editingNoteId === note.id;
            return isEditing
              ? /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$EditNoteForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {
                    initialContent: note.content,
                    onSave: onSave,
                    onCancel: onCancelEdit,
                  },
                  note.id,
                  false,
                  {
                    fileName: "[project]/src/components/Notes/NotesGrid.tsx",
                    lineNumber: 39,
                    columnNumber: 11,
                  },
                  this,
                )
              : /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Notes$2f$NoteCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {
                    content: note.content,
                    date: note.date,
                    selected: selectedNoteId === note.id,
                    onClick: () => onSelect(note.id),
                    onEdit: () => onEdit(note.id),
                    onDelete: () => onDelete(note.id),
                  },
                  note.id,
                  false,
                  {
                    fileName: "[project]/src/components/Notes/NotesGrid.tsx",
                    lineNumber: 46,
                    columnNumber: 11,
                  },
                  this,
                );
          }),
        },
        void 0,
        false,
        {
          fileName: "[project]/src/components/Notes/NotesGrid.tsx",
          lineNumber: 29,
          columnNumber: 5,
        },
        this,
      );
    }
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0j8bm8e._.js.map
