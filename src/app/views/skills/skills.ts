import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

import db from '../../../../db.json';

type SkillLevel = 'basic' | 'intermediary' | 'advanced';
interface Skill {
  level: SkillLevel;
  description: string;
  docs: string;
}

interface SkillCategory {
  label: string;
  skills: Record<string, Skill>;
}

interface Library {
  name: string;
  description: string;
  docs: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatTooltipModule],
  template: `
    <h1>skills</h1>

    <ul class="skills-container">
      @for (category of categories(); track category.label) {
        <li class="skill-category {{ category.label }}">
          <h3>{{ category.label }}</h3>
          @for (
            skill of category.skills | keyvalue: unsorted;
            track skill.key
          ) {
            <mat-chip [matTooltip]="skill.value.description">
              <a [href]="skill.value.docs" target="_blank">
                <strong>{{ skill.key }}</strong> | {{ skill.value.level }}
              </a>
            </mat-chip>
          }
        </li>
      }
    </ul>

    <div class="libraries-container">
      <h2>libraries</h2>
      <div class="libraries">
        @for (lib of libraries(); track lib) {
          <mat-chip [matTooltip]="lib.description">
            <a [href]="lib.docs" target="_blank">{{ lib.name }}</a>
          </mat-chip>
        }
      </div>
    </div>
  `,

  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly categories = signal<SkillCategory[]>(
    db['skill-categories'].filter(c =>
      ((value: unknown): value is SkillCategory => {
        if (value === null || typeof value !== 'object') return false;

        const { label, skills } = value as Record<string, unknown>;
        if (typeof label !== 'string') return false;
        if (skills === null || typeof skills !== 'object') return false;

        const levels = ['basic', 'intermediary', 'advanced'];
        return Object.values(skills).every((skill): skill is Skill => {
          if (skill === null || typeof skill !== 'object') return false;

          const { level, description, docs } = skill as Record<string, unknown>;

          if (typeof level !== 'string' || !levels.includes(level))
            return false;
          if (typeof description !== 'string') return false;
          if (typeof docs !== 'string') return false;

          return true;
        });
      })(c),
    ),
  );

  protected readonly libraries = signal<Library[]>(db.libraries as Library[]);

  protected unsorted = (): number => 0;
}
