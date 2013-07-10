set PATH=%PATH%;"C:\Program Files\Git\cmd"
mkdir old
set /P branch=Enter branch: %=%
git show %branch%:paper.tex > old/paper.tex 
latexdiff "old/paper.tex" "paper.tex" > diff_paper.tex 
rmdir old /s