"use client"

import Image from "next/image"
import Link from "next/link"
import { JSX, useState } from "react"
import galleryData from "../../../const/gallery-data.json" // Adjust path as needed

// Type definitions
interface ProjectImage {
  url: string
  alt: string
  caption: string
}

interface Project {
  id: number
  title: string
  description: string
  location: string
  date: string
  category: string
  images: ProjectImage[]
  services: string[]
  featured: boolean
}

interface Category {
  name: string
  label: string
  description: string
}

interface GalleryData {
  projects: Project[]
  categories: Category[]
}

interface SelectedImage {
  project: Project
  imageIndex: number
}

// Type the imported JSON data
const typedGalleryData: GalleryData = galleryData

export default function WorkGalleryPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null)

  const filteredProjects: Project[] = selectedCategory === "all" 
    ? typedGalleryData.projects 
    : typedGalleryData.projects.filter((project: Project) => project.category === selectedCategory)

  const featuredProjects: Project[] = typedGalleryData.projects.filter((project: Project) => project.featured)

  const handleImageClick = (project: Project, imageIndex: number): void => {
    setSelectedImage({ project, imageIndex })
  }

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category)
  }

  const closeModal = (): void => {
    setSelectedImage(null)
  }

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString()
  }

  const getCategoryLabel = (categoryName: string): string => {
    const category = typedGalleryData.categories.find((c: Category) => c.name === categoryName)
    return category?.label || categoryName
  }

  const getProjectCount = (categoryName: string): number => {
    return typedGalleryData.projects.filter((p: Project) => p.category === categoryName).length
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/work-gallery-hero.webp"
          alt="Jackson Hole Bat Removal Work Gallery"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        
        <div className="relative z-10 space-y-4 px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
            Our Work Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto">
            See our professional bat removal and exclusion projects across Wyoming
          </p>
          <div className="flex items-center justify-center space-x-2 text-white/80">
            <Link href="/about" className="hover:text-amber-300 transition-colors">
              About
            </Link>
            <span>•</span>
            <span>Work Gallery</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/80 backdrop-blur-sm border-y border-white/50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600">{typedGalleryData.projects.length}+</div>
              <div className="text-slate-600 font-medium">Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-slate-600 font-medium">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">2-Year</div>
              <div className="text-slate-600 font-medium">Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing our most comprehensive and challenging exclusion work
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project: Project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.images[0].url}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-amber-600 font-medium capitalize">
                      {getCategoryLabel(project.category)}
                    </span>
                    <span className="text-sm text-slate-500">
                      {formatDate(project.date)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </div>
                    <button
                      onClick={() => handleImageClick(project, 0)}
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                      type="button"
                    >
                      View Gallery →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            All Projects
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-white/80 text-slate-700 hover:bg-amber-100 border border-white/50"
              }`}
              type="button"
            >
              All Projects ({typedGalleryData.projects.length})
            </button>
            {typedGalleryData.categories.map((category: Category) => {
              const count = getProjectCount(category.name)
              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-amber-500 text-white shadow-lg"
                      : "bg-white/80 text-slate-700 hover:bg-amber-100 border border-white/50"
                  }`}
                  type="button"
                >
                  {category.label} ({count})
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/50"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.images[0].url}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    {project.images.length} photos
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-amber-600 font-medium capitalize">
                    {getCategoryLabel(project.category)}
                  </span>
                  <span className="text-sm text-slate-500">
                    {formatDate(project.date)}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.slice(0, 2).map((service: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-lg"
                    >
                      {service}
                    </span>
                  ))}
                  {project.services.length > 2 && (
                    <span className="text-xs text-slate-500 px-2 py-1">
                      +{project.services.length - 2} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-500 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </div>
                  <button
                    onClick={() => handleImageClick(project, 0)}
                    className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                    type="button"
                  >
                    View Photos →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🦇</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              No projects found
            </h3>
            <p className="text-slate-600">
              No projects match the selected category. Try selecting a different filter.
            </p>
          </div>
        )}
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full max-h-full overflow-auto">
            <div className="bg-white rounded-3xl overflow-hidden">
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      {selectedImage.project.title}
                    </h3>
                    <p className="text-slate-600">{selectedImage.project.location}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-slate-400 hover:text-slate-600 text-3xl leading-none"
                    type="button"
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedImage.project.images.map((image: ProjectImage, index: number) => (
                    <div key={index} className="space-y-3">
                      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm text-slate-600 italic">
                        {image.caption}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-slate-50 rounded-2xl">
                  <h4 className="font-bold text-slate-800 mb-3">Project Details</h4>
                  <p className="text-slate-700 mb-4">{selectedImage.project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.project.services.map((service: string, index: number) => (
                      <span
                        key={index}
                        className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-lg"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-amber-600 to-yellow-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Professional Bat Removal?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See the quality work we deliver to Wyoming homeowners and businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(801)675-8829"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (801) 675-8829
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-bold rounded-2xl border-2 border-white hover:bg-white hover:text-amber-600 transition-all duration-300"
            >
              Get Free Quote
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}