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
            // Mock de envio
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
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-lg bg-white/80 backdrop-blur rounded-2xl shadow-lg p-8 space-y-6">
                {/* Cabeçalho */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-semibold tracking-tight">Análise de Currículo</h1>
                    <p className="text-gray-500 text-sm">
                        Faça upload do seu currículo em PDF ou DOCX para começar a análise.
                    </p>
                </div>

                {/* Dropzone */}
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl cursor-pointer transition hover:bg-gray-50 hover:border-blue-400">
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
                    {file ? (
                        <span className="text-sm text-gray-700 font-medium flex items-center gap-1">
              <FileText className="w-4 h-4 text-blue-500" />
                            {file.name}
            </span>
                    ) : (
                        <span className="text-sm text-gray-500">Arraste ou clique para selecionar</span>
                    )}
                    <span className="text-[11px] text-gray-400 mt-1">PDF ou DOCX, máx. 5MB</span>
                </label>

                {/* Botão */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Button
                        type="submit"
                        disabled={loading || !file}
                        className="w-full"
                    >
                        {loading ? 'Enviando...' : 'Enviar currículo'}
                    </Button>
                </form>

                {/* Status */}
                {status === 'success' && (
                    <div className="flex items-center justify-center gap-2 text-green-600 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4" /> Currículo enviado com sucesso!
                    </div>
                )}
                {status === 'error' && (
                    <div className="flex items-center justify-center gap-2 text-red-600 text-sm font-medium">
                        <XCircle className="w-4 h-4" /> Erro ao enviar o currículo. Tente novamente.
                    </div>
                )}
            </div>
        </div>
    )
}
