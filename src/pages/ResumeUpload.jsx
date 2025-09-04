import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { UploadCloud, FileText, CheckCircle2, XCircle } from 'lucide-react'

export default function ResumeUpload() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null) // success | error | null

    const handleFileChange = (e) => {
        const selected = e.target.files[0]
        if (selected) {
            setFile(selected)
            setStatus(null)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!file) return
        setLoading(true)
        try {
            await new Promise((res) => setTimeout(res, 1500))
            console.log('Arquivo enviado:', file)
            setStatus('success')
        } catch (err) {
            setStatus('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
            <div
                className="w-full max-w-lg bg-slate-900/70 border border-slate-700 rounded-2xl shadow-lg p-8 space-y-6">
                {/* Cabeçalho */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold">Análise de Currículo</h1>
                    <p className="text-base text-slate-400">
                        Faça upload do seu currículo em PDF ou DOCX para começar a análise.
                    </p>
                </div>

                {/* Dropzone */}
                <label
                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-700 rounded-xl cursor-pointer transition hover:border-blue-400/60 hover:bg-slate-800/40">
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <UploadCloud className="w-10 h-10 text-slate-400 mb-2"/>
                    {file ? (
                        <span className="text-sm text-slate-200 font-medium flex items-center gap-1">
              <FileText className="w-4 h-4 text-blue-400"/>
                            {file.name}
            </span>
                    ) : (
                        <span className="text-sm text-slate-400">
              Arraste ou clique para selecionar
            </span>
                    )}
                    <span className="text-[11px] text-slate-500 mt-1">
            PDF ou DOCX, máx. 5MB
          </span>
                </label>

                {/* Botão */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Button type="submit" disabled={loading || !file} className="w-full text-lg py-3">
                        {loading ? 'Enviando...' : 'Enviar currículo'}
                    </Button>
                </form>

                {/* Status */}
                {status === 'success' && (
                    <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4"/> Currículo enviado com sucesso!
                    </div>
                )}
                {status === 'error' && (
                    <div className="flex items-center justify-center gap-2 text-rose-400 text-sm font-medium">
                        <XCircle className="w-4 h-4"/> Erro ao enviar o currículo. Tente novamente.
                    </div>
                )}
            </div>
        </div>
    )
}
