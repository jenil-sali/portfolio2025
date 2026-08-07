import React from 'react';
import { motion } from 'framer-motion';
import { TerminalSquare } from 'lucide-react';
import './CodeTerminal.css';

const CodeTerminal = () => {
  return (
    <section className="code-terminal-section section-container">
      <motion.div 
        className="editor-window"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="editor-header">
          <div className="editor-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="editor-tabs">
            <div className="editor-tab active">
              <TerminalSquare size={14} className="tab-icon" />
              jenil.config.js
            </div>
          </div>
        </div>
        
        <div className="editor-body">
          <div className="line-numbers">
            {Array.from({length: 15}).map((_, i) => (
              <span key={i + 1}>{i + 1}</span>
            ))}
          </div>
          <div className="code-content">
            <pre>
              <code className="language-javascript">
                <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> {'{'}
                <br />
                {'  '}<span className="property">name</span>: <span className="string">"Jenil Sali"</span>,
                <br />
                {'  '}<span className="property">role</span>: <span className="string">"Software Developer"</span>,
                <br />
                <br />
                {'  '}<span className="property">focus</span>: [
                <br />
                {'    '}<span className="string">"Scalable Applications"</span>,
                <br />
                {'    '}<span className="string">"Backend Systems"</span>,
                <br />
                {'    '}<span className="string">"APIs"</span>,
                <br />
                {'    '}<span className="string">"Modern Web Development"</span>
                <br />
                {'  '}],
                <br />
                <br />
                {'  '}<span className="property">mindset</span>: <span className="string">"Build. Debug. Improve."</span>
                <br />
                {'}'};
                <br />
                <br />
                <span className="keyword">export default</span> <span className="variable">developer</span>;
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CodeTerminal;
