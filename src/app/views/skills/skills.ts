import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
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
  stacks: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatChipsModule, MatTooltipModule],
  template: `
    <h1>skills</h1>

    <mat-accordion>
      @for (category of categories(); track category.label) {
        <mat-expansion-panel [expanded]="false">
          <mat-expansion-panel-header>
            <mat-panel-title>{{ category.label }}</mat-panel-title>
          </mat-expansion-panel-header>

          <div class="expansion-content">
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
          </div>
        </mat-expansion-panel>
      }

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>libraries</mat-panel-title>
        </mat-expansion-panel-header>

        <div class="expansion-content">
          @for (lib of libraries(); track lib) {
            <mat-chip
              matTooltip="{{ lib.description }} ({{ lib.stacks.join(', ') }})"
            >
              <a [href]="lib.docs" target="_blank">{{ lib.name }}</a>
            </mat-chip>
          }
        </div>
      </mat-expansion-panel>
    </mat-accordion>
  `,

  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly libraries = signal<Library[]>(db.libraries as Library[]);
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

  protected unsorted = (): number => 0;
}
