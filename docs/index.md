# Welcome to pyPathway

A python package for playing with biology pathways [github](http://mkdocs.org).

## Usage

* Search and retrieve pathway from KEGG and Pathway Common
* Parse `BioPAX`, `SBGN-ML`, `KGML` format pathway file
* Intergrate `genome`, `transcriptomes`, `protomes`, `metabonomics` data to pathway
* Interactive visualize data via `IPython` and `matplotlib`

## Credit
* Cytoscape.js
* BioPAX project
* SBGN project
* SBGNviz.js
## Installation
	pip install pyPathway

## Hello World
	import pyPathway
	
	pathway = Search(“Jak”, “KEGG”)
	pathway.summary()
	pathway[0].visualize()
!!! note
	hahaha

!!! warning "Don't try this at home"
    If you do, you will regret it.
    
```javascript
class a:
	def __init__():
		pass
```
## Package Overall
Here should be a image of package structure
## Pathway Search and Retrieve
#### Supported database
*  `KEGG`
*  `Reactome`
*  `Pathway Common`
#### Supported format
* `KGML`
* `BioPAX`
* `SBGN-PD`
## Auto-Layout
support auto-layout algothrim: CoSE.
## Data Integration
* `Genome`
* `Transtomes`
* `protomes`
* `metabonomics`
## [Interactive API](docs.md)
* Mouse Event Handle in Python
* Advance usage



