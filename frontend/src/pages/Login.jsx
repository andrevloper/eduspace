import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { GraduationCap, Calendar, Lock, Zap, Eye, EyeOff, AlertCircle, LogIn } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPw, setShowPw] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
    return () => {
      const saved = localStorage.getItem('theme') || 'light'
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  const handleSubmit = async e => {
    e.preventDefault(); setError(''); setLoading(true)
    try { await login(email, password); navigate('/') }
    catch (err) { setError(err.response?.data?.error || 'Credenciais inválidas') }
    finally { setLoading(false) }
  }

  const fill = (e, p) => { setEmail(e); setPassword(p) }

  const features = [
    [Calendar, 'Calendário'],
    [Lock, 'Controle de acesso'],
    [Zap, 'Anti-conflitos'],
  ]

  return (
    <div style={{ minHeight:'100vh', background:'#071a10', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
      {/* Background patterns */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(22,163,74,.1) 1px, transparent 1px)', backgroundSize:'32px 32px' }} />
      <div style={{ position:'absolute', top:'15%', left:'15%', width:'600px', height:'600px', background:'radial-gradient(circle, rgba(22,163,74,.14) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', right:'10%', width:'350px', height:'350px', background:'radial-gradient(circle, rgba(22,163,74,.08) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />

      {/* Card */}
      <div style={{ width:'440px', maxWidth:'calc(100% - 32px)', background:'#ffffff', borderRadius:'var(--radius-xl)', padding:'44px 40px 36px', boxShadow:'0 24px 80px rgba(0,0,0,.55)', position:'relative', zIndex:1 }}>

        {/* Logo */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'32px' }}>
          <div style={{ width:'56px', height:'56px', background:'#16a34a', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'14px', boxShadow:'0 4px 20px rgba(22,163,74,.45)' }}>
            <GraduationCap size={28} color="#fff" strokeWidth={2.2} />
          </div>
          <h1 style={{ fontSize:'26px', fontWeight:800, color:'#111827', letterSpacing:'-.5px', margin:0 }}>Eduspace</h1>
          <p style={{ fontSize:'13.5px', color:'#9CA3AF', marginTop:'5px', margin:'5px 0 0' }}>Acesse sua conta institucional</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom:'16px' }}>
            <label style={{ display:'block', fontSize:'11.5px', fontWeight:700, color:'#374151', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.5px' }}>E-mail</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="seu@email.com"
              style={{ width:'100%', padding:'11px 14px', border:'1.5px solid #E5E7EB', borderRadius:'var(--radius)', fontSize:'14px', outline:'none', transition:'all .15s', background:'#fff', color:'#111827', fontFamily:'inherit' }}
              onFocus={e => { e.target.style.borderColor = '#16a34a'; e.target.style.boxShadow = '0 0 0 3px rgba(22,163,74,.12)' }}
              onBlur={e  => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none' }} />
          </div>

          <div style={{ marginBottom:'24px' }}>
            <label style={{ display:'block', fontSize:'11.5px', fontWeight:700, color:'#374151', marginBottom:'6px', textTransform:'uppercase', letterSpacing:'.5px' }}>Senha</label>
            <div style={{ position:'relative' }}>
              <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••"
                style={{ width:'100%', padding:'11px 44px 11px 14px', border:'1.5px solid #E5E7EB', borderRadius:'var(--radius)', fontSize:'14px', outline:'none', transition:'all .15s', background:'#fff', color:'#111827', fontFamily:'inherit' }}
                onFocus={e => { e.target.style.borderColor = '#16a34a'; e.target.style.boxShadow = '0 0 0 3px rgba(22,163,74,.12)' }}
                onBlur={e  => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none' }} />
              <button type="button" onClick={() => setShowPw(p => !p)}
                style={{ position:'absolute', right:'12px', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'#9CA3AF', padding:'4px' }}>
                {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          {error && (
            <div style={{ background:'#FEF3F2', color:'#F04438', padding:'11px 14px', borderRadius:'var(--radius)', fontSize:'13.5px', marginBottom:'16px', border:'1px solid #FCA5A5', display:'flex', gap:'8px', alignItems:'center' }}>
              <AlertCircle size={15} style={{ flexShrink:0 }} />{error}
            </div>
          )}

          <button type="submit" disabled={loading}
            style={{ width:'100%', padding:'12px', background:'#16a34a', color:'#fff', border:'none', borderRadius:'var(--radius-lg)', fontSize:'14.5px', fontWeight:700, cursor:loading ? 'not-allowed' : 'pointer', transition:'all .15s', boxShadow:'0 4px 14px rgba(22,163,74,.4)', opacity:loading ? .7 : 1, display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', fontFamily:'inherit' }}>
            {loading ? 'Entrando...' : <><LogIn size={17} />Entrar no sistema</>}
          </button>
        </form>

        {/* Features */}
        <div style={{ display:'flex', justifyContent:'center', gap:'20px', marginTop:'22px', paddingTop:'18px', borderTop:'1px solid #F3F4F6', flexWrap:'wrap' }}>
          {features.map(([Icon, lbl]) => (
            <div key={lbl} style={{ display:'flex', alignItems:'center', gap:'6px' }}>
              <Icon size={13} color="#16a34a" strokeWidth={2.2} />
              <span style={{ fontSize:'12px', color:'#6B7280', fontWeight:500 }}>{lbl}</span>
            </div>
          ))}
        </div>

        {/* Test accounts */}
        <div style={{ marginTop:'18px', padding:'14px', background:'#F9FAFB', borderRadius:'var(--radius-lg)', border:'1px solid #E5E7EB' }}>
          <div style={{ fontSize:'11px', fontWeight:700, color:'#9CA3AF', textTransform:'uppercase', letterSpacing:'.5px', marginBottom:'10px' }}>Contas de teste</div>
          {[
            ['admin@agendamento.com', 'admin123', 'Administrador'],
            ['joao@agendamento.com',  'prof123',  'Professor'],
          ].map(([e, p, lbl]) => (
            <button key={e} type="button" onClick={() => fill(e, p)}
              style={{ width:'100%', textAlign:'left', padding:'9px 12px', background:'#fff', border:'1px solid #E5E7EB', borderRadius:'var(--radius)', cursor:'pointer', marginBottom:'6px', display:'flex', justifyContent:'space-between', alignItems:'center', transition:'all .12s', outline:'none', fontFamily:'inherit' }}
              onMouseEnter={e2 => { e2.currentTarget.style.borderColor = '#16a34a'; e2.currentTarget.style.background = '#f0fdf4' }}
              onMouseLeave={e2 => { e2.currentTarget.style.borderColor = '#E5E7EB'; e2.currentTarget.style.background = '#fff' }}>
              <div>
                <div style={{ fontSize:'12.5px', fontWeight:600, color:'#111827' }}>{lbl}</div>
                <div style={{ fontSize:'11px', color:'#9CA3AF' }}>{e}</div>
              </div>
              <span style={{ fontSize:'11px', color:'#16a34a', fontWeight:600 }}>Usar →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
