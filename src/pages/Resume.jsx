import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Divider } from '../components/ui/Divider'
import {
    AlertCircle, ArrowRightCircle, Download, Eye, FileText, FileUp, Loader2, UploadCloud, X
} from 'lucide-react'

const ACCEPTED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

// Mock inicial (substituir por fetch da API quando estiver pronta)
const INITIAL_RESUMES = [
    {
        id: 'rsm_001',
        name: 'Gabriel Santos',
        filename: 'Gabriel_Santos_CV.pdf',
        url: '#',
        uploadedAt: '2025-09-10T14:22:00Z'
    },
]

export default function Resume() {
    const [query, setQuery] = useState('')
    const [items, setItems] = useState(INITIAL_RESUMES)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const [uploadError, setUploadError] = useState('')
    const [dragActive, setDragActive] = useState(false)
    const inputRef = useRef(null)

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        return items.filter((it) => {
            const matchesQuery =
                !q ||
                it.name.toLowerCase().includes(q) ||
                it.filename.toLowerCase().includes(q)
            return matchesQuery
        })
    }, [items, query])

    // --- Upload handlers (simulados no front por enquanto) ---
    function openFileDialog() {
        inputRef.current?.click()
    }

    function onFileChange(e) {
        if (!e.target.files?.length) return
        handleFiles(Array.from(e.target.files))
        e.target.value = '' // reset para permitir re-upload do mesmo arquivo
    }

    function handleFiles(files) {
        setUploadError('')
        const invalid = files.filter(f => !ACCEPTED_TYPES.includes(f.type))
        if (invalid.length) {
            setUploadError('Alguns arquivos foram rejeitados. Formatos aceitos: PDF, DOC, DOCX.')
            return
        }
        // Simulação de upload
        setIsUploading(true)
        setTimeout(() => {
            const now = new Date().toISOString()
            const newItems = files.map((f, idx) => ({
                id: `local_${Date.now()}_${idx}`,
                name: guessNameFromFile(f.name),
                filename: f.name,
                url: '#',
                uploadedAt: now
            }))
            setItems(prev => [...newItems, ...prev])
            setIsUploading(false)
            setIsModalOpen(false)
        }, 900)
    }

    function guessNameFromFile(filename) {
        // Heurística simples para preencher nome a partir do arquivo
        const base = filename.replace(/\.[^.]+$/, '')
        return base
            .replace(/[_-]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/\b\w/g, (c) => c.toUpperCase())
    }

    // Drag & Drop
    function onDragOver(e) {
        e.preventDefault()
        setDragActive(true)
    }
    function onDragLeave(e) {
        e.preventDefault()
        setDragActive(false)
    }
    function onDrop(e) {
        e.preventDefault()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length) {
            handleFiles(Array.from(e.dataTransfer.files))
        }
    }

    function removeItem(id) {
        setItems(prev => prev.filter(i => i.id !== id))
    }

    return (
        <section className="flex items-center justify-center px-4">
            <div className="w-full max-w-6xl rounded-3xl shadow-xl border border-slate-700 bg-slate-900/70 p-6 sm:p-10 space-y-8">
                {/* Cabeçalho */}
                <header className="space-y-6">
                    <div className="text-center space-y-3">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                            Currículos para Análise
                        </h1>
                        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                            Envie currículos para processamento por IA e gerencie os envios nesta tela.
                            Você poderá abrir uma página de <span className="text-slate-100 font-medium">detalhes</span> depois.
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/15 text-indigo-200 px-5 py-2 text-sm cursor-pointer hover:border-indigo-400 transition-colors"
                            title="Enviar currículo"
                            aria-label="Enviar currículo"
                            type="button"
                        >
                            <UploadCloud className="h-4 w-4" />
                            Enviar currículo
                        </button>
                    </div>
                </header>

                <Divider>Envios</Divider>

                {/* Lista responsiva */}
                <section className="space-y-3">
                    {/* Desktop: Tabela */}
                    <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-700">
                        <table className="w-full text-sm bg-slate-900/40">
                            <thead className="bg-slate-900/80 text-slate-300">
                            <tr>
                                <Th>Nome</Th>
                                <Th>Arquivo</Th>
                                <Th>Enviado em</Th>
                                <Th className="text-right pr-4">Ações</Th>
                            </tr>
                            </thead>
                            <tbody>
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="text-center text-slate-400 py-10">
                                        Nenhum currículo encontrado.
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((it) => (
                                    <tr key={it.id} className="border-t border-slate-800/60 hover:bg-slate-900/60">
                                        <Td>
                                            <div className="flex items-center gap-2">
                                                <FileText className="h-4 w-4 text-slate-400" />
                                                <span className="text-slate-100">{it.name || '—'}</span>
                                            </div>
                                        </Td>
                                        <Td>
                                            <span className="text-slate-200">{it.filename}</span>
                                        </Td>
                                        <Td className="text-slate-300">{formatDate(it.uploadedAt)}</Td>
                                        <Td className="text-right">
                                            <div className="flex justify-end gap-2 pr-2">
                                                <Link to={`/resumes/${it.id}`}>
                                                    <PrimaryCTA label="Ver detalhes">
                                                        <span className="hidden sm:inline">Ver detalhes</span>
                                                    </PrimaryCTA>
                                                </Link>
                                                <a href={it.url} download>
                                                    <IconButton label="Baixar">
                                                        <Download className="h-4 w-4" />
                                                    </IconButton>
                                                </a>
                                                <IconButton onClick={() => removeItem(it.id)} label="Remover">
                                                    <X className="h-4 w-4" />
                                                </IconButton>
                                            </div>
                                        </Td>
                                    </tr>
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile: Cards */}
                    <div className="md:hidden grid gap-3">
                        {filtered.length === 0 ? (
                            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 text-center text-slate-400">
                                Nenhum currículo encontrado.
                            </div>
                        ) : (
                            filtered.map((it) => (
                                <div
                                    key={it.id}
                                    className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 space-y-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <FileText className="h-4 w-4 text-slate-400" />
                                            <span className="text-slate-100 font-medium">{it.name || '—'}</span>
                                        </div>
                                    </div>

                                    <div className="text-xs text-slate-300 space-y-1">
                                        <p className="truncate"><span className="text-slate-400">Arquivo:</span> {it.filename}</p>
                                        <p><span className="text-slate-400">Enviado:</span> {formatDate(it.uploadedAt)}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Link to={`/resumes/${it.id}`} className="flex-1">
                                            <button
                                                className="w-full flex items-center justify-center gap-2 text-sm rounded-2xl border border-indigo-500/40 bg-indigo-500/15 text-indigo-200 py-2 cursor-pointer hover:border-indigo-400"
                                                aria-label="Ver detalhes"
                                                title="Ver detalhes"
                                                type="button"
                                            >
                                                <Eye className="h-4 w-4" />
                                                Ver detalhes
                                                <ArrowRightCircle className="h-4 w-4" />
                                            </button>
                                        </Link>
                                        <a href={it.url} download className="flex-1">
                                            <button
                                                className="w-full flex items-center justify-center gap-2 text-sm rounded-2xl border border-slate-700 bg-slate-900/60 text-slate-200 py-2 cursor-pointer hover:border-slate-600"
                                                aria-label="Baixar"
                                                title="Baixar"
                                                type="button"
                                            >
                                                <Download className="h-4 w-4" /> Baixar
                                            </button>
                                        </a>
                                        <button
                                            onClick={() => removeItem(it.id)}
                                            className="rounded-xl border border-slate-700 bg-slate-900/60 p-2 text-slate-300 cursor-pointer hover:border-slate-600"
                                            aria-label="Remover"
                                            title="Remover"
                                            type="button"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </section>

                <Divider>Como funciona</Divider>

                <section className="grid gap-4 sm:grid-cols-2">
                    <GlassInfo
                        icon={<UploadCloud className="h-5 w-5 text-blue-400" />}
                        title="Envio rápido"
                        desc="Arraste e solte ou selecione arquivos em PDF/DOC/DOCX."
                    />
                    <GlassInfo
                        icon={<ArrowRightCircle className="h-5 w-5 text-emerald-400" />}
                        title="Próximo passo"
                        desc="Abra os detalhes para acompanhar a análise e o relatório da IA."
                    />
                </section>
            </div>

            {/* Modal de Upload */}
            <Modal open={isModalOpen} onClose={() => (!isUploading && setIsModalOpen(false))}>
                <div className="space-y-5">
                    <header className="space-y-2 text-center">
                        <h3 className="text-xl font-semibold text-slate-100">Enviar Currículos</h3>
                        <p className="text-sm text-slate-400">
                            Formatos aceitos: <span className="text-slate-300">PDF, DOC, DOCX</span>
                        </p>
                    </header>

                    <div
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                        className={[
                            'rounded-2xl border-2 border-dashed p-8 transition-colors',
                            dragActive ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-700 bg-slate-900/50'
                        ].join(' ')}
                    >
                        <div className="flex flex-col items-center gap-3 text-center">
                            <UploadCloud className="h-8 w-8 text-slate-400" />
                            <p className="text-slate-300 text-sm">
                                Arraste e solte os arquivos aqui
                                <br />
                                <span className="text-slate-400">ou</span>
                            </p>
                            <button
                                onClick={openFileDialog}
                                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 text-slate-200 text-sm px-3 py-2 cursor-pointer hover:border-slate-600"
                                type="button"
                                title="Selecionar arquivos"
                                aria-label="Selecionar arquivos"
                            >
                                <FileUp className="h-4 w-4" /> Selecionar arquivos
                            </button>
                            <input
                                ref={inputRef}
                                onChange={onFileChange}
                                type="file"
                                accept=".pdf,.doc,.docx"
                                multiple
                                className="hidden"
                            />
                        </div>
                    </div>

                    {uploadError && (
                        <p className="text-sm text-rose-300 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            {uploadError}
                        </p>
                    )}

                    <div className="flex items-center justify-end gap-2">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            disabled={isUploading}
                            className="px-3 py-2 rounded-xl text-sm border border-slate-700 bg-slate-900/60 text-slate-200 cursor-pointer hover:border-slate-600 disabled:opacity-60"
                            type="button"
                        >
                            Cancelar
                        </button>
                        <button
                            disabled
                            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm border border-indigo-500/40 bg-indigo-500/15 text-indigo-200 cursor-pointer"
                            type="button"
                            title={isUploading ? 'Enviando...' : 'Enviar'}
                            aria-label={isUploading ? 'Enviando' : 'Enviar'}
                        >
                            {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <UploadCloud className="h-4 w-4" />}
                            {isUploading ? 'Enviando...' : 'Enviar'}
                        </button>
                    </div>
                </div>
            </Modal>
        </section>
    )
}

// ---------- Subcomponentes ----------

function Th({ children, className = '' }) {
    return (
        <th className={`text-left px-4 py-3 font-medium text-xs uppercase tracking-wide ${className}`}>{children}</th>
    )
}

function Td({ children, className = '' }) {
    return (
        <td className={`px-4 py-3 align-middle text-slate-200 ${className}`}>{children}</td>
    )
}

function IconButton({ children, onClick, label }) {
    return (
        <button
            onClick={onClick}
            className="rounded-xl border border-slate-700 bg-slate-900/60 p-2 text-slate-300 cursor-pointer hover:border-slate-600"
            aria-label={label}
            title={label}
            type="button"
        >
            {children}
        </button>
    )
}

function PrimaryCTA({ children, label }) {
    return (
        <button
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/15 text-indigo-200 px-5 py-2 cursor-pointer hover:border-indigo-400"
            aria-label={label}
            title={label}
            type="button"
        >
            {children}
        </button>
    )
}

function GlassInfo({ icon, title, desc }) {
    return (
        <div className="rounded-2xl bg-slate-900/60 shadow-sm p-5 border border-slate-700">
            <div className="flex items-center gap-3">
        <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-slate-800">
          {icon}
        </span>
                <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
            </div>
            <p className="text-sm text-slate-300 mt-3">{desc}</p>
        </div>
    )
}

function Modal({ open, onClose, children }) {
    if (!open) return null
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            aria-modal="true"
            role="dialog"
        >
            <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-[95%] max-w-xl rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-2xl">
                <button
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-200 cursor-pointer"
                    onClick={onClose}
                    aria-label="Fechar"
                    title="Fechar"
                    type="button"
                >
                    <X className="h-5 w-5" />
                </button>
                {children}
            </div>
        </div>
    )
}

function formatDate(iso) {
    try {
        const d = new Date(iso)
        return d.toLocaleString()
    } catch {
        return '—'
    }
}
