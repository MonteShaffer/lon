// Hyphenation patterns for Modern Monotonic Greek.
// Created by Dimitrios Filippou with some ideas borrowed from
// Yannis Haralambous, Kostis Dryllerakis and Claudio Beccari.
// From http://tug.org/svn/texhyphen/branches/ptex/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-el-monoton.tex
// Converted by Pablo Rodríguez (hyphenator at pragmata dot tk)
if (typeof Hyphenator === 'undefined') {
    Hyphenator = [];
    Hyphenator.languages = [];
}
/*global Hyphenator*/
Hyphenator.languages['el-monoton'] = {
    leftmin: 2,
    rightmin: 2,
    specialChars: "αεηιουωϊϋάέήίόύώΐΰίάύέήόώβγκδζθλμπντξρσϲςφχψ'ʼ᾿’᾽",
    patterns: {
        2: "α1ε1η1ι1ο1υ1ω1ϊ1ϋ1ά1έ1ή1ί1ό1ύ1ώ1ΐ1ΰ14'4ʼ4᾿",
        3: "α2ια2ία2ίά2ιά2ιά2ϊά2ϊα2υα2ύα2ύά3υά3υε2ιε2ίε2ίέ2ιέ2ιέ2ϊέ2ϊε2υε2ύε2ύέ3υέ3υη2υη2ύη2ύή3υή3υο2ιο2ίο2ίό2ιό2ιό2ϊό2ϊο2υο2ύο2ύό3υό3υυ2ιυ2ίυ2ίύ3ιύ3ια2ηα2ϊα2ϋε2ϊε2ϋο2ηο2ϊι2αι2άι2άι2ει2έι2έι2οι2όι2όι2ωι2ώι2ώ_ι3_ί3_ί3η2αη2άη2άη2εη2έη2έη2οη2όη2όη2ωη2ώη2ώ_η3_ή3_ή3υ2αυ2άυ2άυ2ου2όυ2όυ2ωυ2ώυ2ώ_υ3_ύ3_ύ34β_4γ_4δ_4ζ_4θ_4κ_4λ_4μ_4ν_4ξ_4π_4ρ_4σ_4ϲ_4ς_4τ_4φ_4χ_4ψ_4β'4βʼ4β᾿4γ'4γʼ4γ᾿4δ'4δʼ4δ᾿4ζ'4ζʼ4ζ᾿4θ'4θʼ4θ᾿4κ'4κʼ4κ᾿4λ'4λʼ4λ᾿4μ'4μʼ4μ᾿4ν'4νʼ4ν᾿4ξ'4ξʼ4ξ᾿4π'4πʼ4π᾿4ρ'4ρʼ4ρ᾿4σ'4σʼ4σ᾿4ϲ'4ϲʼ4ϲ᾿4τ'4τʼ4τ᾿4φ'4φʼ4φ᾿4χ'4χʼ4χ᾿4ψ'4ψʼ4ψ᾿_β4_γ4_δ4_ζ4_θ4_κ4_λ4_μ4_ν4_ξ4_π4_ρ4_σ4_ϲ4_τ4_φ4_χ4_ψ4",
        4: "ά3η_ά3η_ά3ι_ά3ι_ο2ειό3η_ό3η_ό3ι_ό3ι_4γκ_4μπ_4ντ_4τζ_4τσ_4τϲ_4τς_4μπ'4μπʼ4μπ᾿4ντ'4ντ’4ντ᾿4τζ'4τζʼ4τζ᾿4τσ'4τσʼ4τσ᾽4τϲ'4τϲʼ4τϲ᾿4β1β4γ1γ4δ1δ4ζ1ζ4θ1θ4κ1κ4λ1λ4μ1μ4ν1ν4π1π4ρ1ρ4σ1σ4ϲ1ϲ4τ1τ4φ1φ4χ1χ4ψ1ψ4β1ζ4β1θ4β1κ4β1μ4β1ν4β1ξ4β1π4β1σ4β1ϲ4β1τ4β1φ4β1χ4β1ψ4γ1β4γ1ζ4γ1θ4γ1μ4γ1ξ4γ1π4γ1σ4γ1ϲ4γ1τ4γ1φ4γ1χ4γ1ψ4δ1β4δ1γ4δ1ζ4δ1θ4δ1κ4δ1λ4δ1ξ4δ1π4δ1σ4δ1ϲ4δ1τ4δ1φ4δ1χ4δ1ψ4ζ1β4ζ1γ4ζ1δ4ζ1θ4ζ1κ4ζ1λ4ζ1μτζ2μ4ζ1ν4ζ1ξ4ζ1π4ζ1ρ4ζ1σ4ζ1ϲ4ζ1τ4ζ1φ4ζ1χ4ζ1ψ4θ1β4θ1γ4θ1δ4θ1ζ4θ1κ4θ1μσθ2μϲθ2μ4θ1ξ4θ1π4θ1σ4θ1ϲ4θ1τ4θ1φ4θ1χ4θ1ψ4κ1β4κ1γ4κ1δ4κ1ζ4κ1θ4κ1μ4κ1ξ4κ1π4κ1σ4κ1ϲ4κ1φ4κ1χ4κ1ψ4λ1β4λ1γ4λ1δ4λ1ζ4λ1θ4λ1κ4λ1μ4λ1ν4λ1ξ4λ1π4λ1ρ4λ1σ4λ1ϲ4λ1τ4λ1φ4λ1χ4λ1ψ4μ1β4μ1γ4μ1δ4μ1ζ4μ1θ4μ1κ4μ1λ4μ1ξ4μ1ρ4μ1σ4μ1ϲ4μ1τ4μ1φ4μ1χ4μ1ψ4ν1β4ν1γ4ν1δ4ν1ζ4ν1θ4ν1κ4ν1λ4ν1μ4ν1ξ4ν1π4ν1ρ4ν1σ4ν1ϲ4ν1φ4ν1χ4ν1ψ4ξ1β4ξ1γ4ξ1δ4ξ1ζ4ξ1θ4ξ1κ4ξ1λ4ξ1μ4ξ1ν4ξ1π4ξ1ρ4ξ1σ4ξ1ϲ4ξ1τ4ξ1φ4ξ1χ4ξ1ψ4π1β4π1γ4π1δ4π1ζ4π1θ4π1κ4π1μ4π1ξ4π1σ4π1ϲ4π1φ4π1χ4π1ψ4ρ1β4ρ1γ4ρ1δ4ρ1ζ4ρ1θ4ρ1κ4ρ1λ4ρ1μ4ρ1ν4ρ1ξ4ρ1π4ρ1σ4ρ1ϲ4ρ1τ4ρ1φ4ρ1χ4ρ1ψ4σ1δ4ϲ1δ4σ1ζ4ϲ1ζ4σ1ν4ϲ1ν4σ1ξ4ϲ1ξ4σ1ρ4ϲ1ρ4σ1ψ4ϲ1ψ4τ1β4τ1γ4τ1δ4τ1θ4τ1κ4τ1ν4τ1ξ4τ1π4τ1φστ2φϲτ2φ4τ1χ4τ1ψ4φ1β4φ1γ4φ1δ4φ1ζ4φ1κ4φ1μ4φ1ν4φ1ξ4φ1π4φ1σ4φ1ϲ4φ1χ4φ1ψ4χ1β4χ1γ4χ1δ4χ1ζ4χ1κ4χ1μ4χ1ξ4χ1π4χ1σ4χ1ϲ4χ1φ4χ1ψ4ψ1β4ψ1γ4ψ1δ4ψ1ζ4ψ1θ4ψ1κ4ψ1λ4ψ1μ4ψ1ν4ψ1ξ4ψ1π4ψ1ρ4ψ1σ4ψ1ϲ4ψ1τ4ψ1φ4ψ1χ4βρ_4γλ_4κλ_4κτ_6κς_6κϲ_4κσ_4λς_4λϲ_4λσ_4μς_4μϲ_4μσ_4νς_4νϲ_4νσ_4ρς_4ρϲ_4ρσ_4σκ_4ϲκ_4στ_4ϲτ_4τλ_4τρ_4φτ_",
        5: "ο3ϊ3όο3ϊ3ό4γ1κτ4μ1πτ4ν1τζ4ν1τσ4ν1τϲ4γκς_4γκϲ_4γκσ_4μπλ_4μπν_4μπρ_4ντς_4ντϲ_4ντσ_",
        6: "4ρ5γ2μ4ρ5θ2μ4λ5κ2μ4ρ5κ2μ4ν5κ2φ4γ5ξ2τ4ρ5ξ2τ4ρ5φ2ν4ρ5χ2μ4μ5ψ2τ4γ5κ2φ4γκ1ντ4γκ1τζ4γκ1τσ4γκ1τϲ4μπ1ντ4μπ1τζ4μπ1τσ4μπ1τϲ4ντ1μπ4τσ1γκ4τϲ1γκ4τσ1μπ4τϲ1μπ4τσ1ντ4τϲ1ντ",
        10: "4χτ_4γκ1μπ"
    }
};
