module Jekyll
  class LessonPage < Page
    def initialize(site, base, course, lesson, index, lessons)
      @site = site
      @base = base

      course_slug = course.data["permalink"].to_s.sub(%r{^/cursos/}, "").chomp("/")
      @dir  = "cursos/#{course_slug}/aula-#{lesson['number']}"
      @name = "index.html"

      process(@name)
      read_yaml(File.join(base, "_layouts"), "lesson.html")

      total = lessons.size

      data["layout"]        = "lesson"
      data["title"]         = "Aula #{lesson['number']} \u2014 #{lesson['title']}"
      data["lesson"]        = lesson
      data["course_title"]  = course.data["title"]
      data["course_url"]    = course.url
      data["all_lessons"]   = lessons
      data["lesson_index"]  = index
      data["total_lessons"] = total

      if index > 0
        prev_l = lessons[index - 1]
        data["prev_lesson"] = {
          "url"    => "/cursos/#{course_slug}/aula-#{prev_l['number']}/",
          "number" => prev_l["number"],
          "title"  => prev_l["title"]
        }
      end

      if index < total - 1
        next_l = lessons[index + 1]
        data["next_lesson"] = {
          "url"    => "/cursos/#{course_slug}/aula-#{next_l['number']}/",
          "number" => next_l["number"],
          "title"  => next_l["title"]
        }
      end
    end
  end

  class LessonPageGenerator < Generator
    safe true
    priority :normal

    def generate(site)
      courses = site.collections["courses"]
      return unless courses

      courses.docs.each do |course|
        lessons = course.data["lessons"]
        next unless lessons.is_a?(Array)

        lessons.each_with_index do |lesson, i|
          site.pages << LessonPage.new(site, site.source, course, lesson, i, lessons)
        end
      end
    end
  end
end
